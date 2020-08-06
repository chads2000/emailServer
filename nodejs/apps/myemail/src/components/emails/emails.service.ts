import {
  Injectable,
  Logger,
  NotFoundException,
  Scope,
  UnprocessableEntityException,
} from '@nestjs/common';
import * as iconv from 'iconv-lite';
import * as quotedPrintable from 'quoted-printable';
import { Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { Database, Email, Emails, EmailsDBService } from '@shared/database';

const logger = new Logger('EmailsAPIService');

enum Headers {
  TO = 'to',
  FROM = 'from',
  SUBJECT = 'subject',
  DATE = 'date',
  CONTENT_TYPE = 'content-type',
  CONTENT_ENCODING = 'content-transfer-encoding',
}

enum ContentEncoding {
  QUOTED = 'quoted-printable',
  BIT_7 = '7bit',
}

interface EmailComponents extends Email {
  contentType: string;
  charSet: string;
  contentEncoding: string;
  boundary: string;
  body: string;
}

interface EmailContents {
  plain: string;
  html: string;
}

@Injectable({ scope: Scope.REQUEST })
export class EmailsAPIService {
  constructor(private readonly emailsDb: EmailsDBService) {}

  /**
   * Get all emails from the database
   *
   * @returns {Observable<Emails>} Observable of Emails
   */
  all(): Observable<Emails> {
    return this.emailsDb.select().pipe(
      map((results: Database.Results<Emails>) => {
        if (results.records && results.records.length > 0) {
          return results.records;
        }
        throw new NotFoundException('Emails not found');
      }),
      map((records: Emails) => {
        records.map((email: Email) => {
          return this.parseEmail(email);
        });
        return records;
      })
    );
  }

  /**
   * Get all deleted emails from the database
   *
   * @returns {Observable<Emails>} Observable of Emails
   */
  allDeleted(): Observable<Emails> {
    return this.emailsDb.select({ deleted: true }).pipe(
      map((results: Database.Results<Emails>) => {
        if (results.records && results.records.length > 0) {
          return results.records;
        }
        throw new NotFoundException('Emails not found');
      }),
      map((records: Emails) => {
        records.map((email: Email) => {
          return this.parseEmail(email);
        });
        return records;
      })
    );
  }

  /**
   * Get an email from the database
   *
   * @param {string} uuid Email's UUID
   * @returns {Observable<Emails>} Observable of Emails
   */
  get(id: number): Observable<Emails> {
    return this.emailsDb.get(id).pipe(
      map((results: Database.Results<Emails>) => {
        if (results.records && results.records.length === 1) {
          return results.records;
        }
        throw new NotFoundException('Email not found');
      }),
      map((records: Emails) => {
        records.map((email: Email) => {
          return this.parseEmail(email, false);
        });
        return records;
      })
    );
  }

  delete(id: number): Observable<Emails> {
    return this.emailsDb.get(id).pipe(
      map((results: Database.Results<Emails>) => {
        if (results.records && results.records.length === 1) {
          return results.records[0];
        }
        throw new NotFoundException('Email not found');
      }),
      mergeMap((email: Email) => {
        return this.emailsDb.delete(email);
      }),
      map((results: Database.Results<Emails>) => {
        if (results.records && results.records.length === 1) {
          return results.records;
        }
        throw new UnprocessableEntityException('Email failed to delete');
      })
    );
  }

  /**
   * Parse the email looking for meta data and parse for content if required
   *
   * @param {Email} email Email to parse
   * @param {boolean} metaOnly Return only meta data
   * @returns {Email} Parsed email with added meta data and email content
   */
  private parseEmail(email: Email, metaOnly: boolean = true): Email {
    const {
      to,
      from,
      subject,
      date,
      contentType,
      charSet,
      contentEncoding,
      boundary,
      body,
    } = this.getHeaders(email.original);

    let contents: EmailContents = {
      plain: null,
      html: null,
    };

    // If only need meta data then remove the original to return smaller payload
    if (metaOnly) {
      email.original = null;
    } else {
      // Else if there was a boundary, parse the email for the plain text and html versions of the email
      if (!!boundary) {
        contents = this.getBoundaryParts(contentType, boundary, body);
      } else {
        // Else return either the plain or html version of the email
        contents.html = this.getHTML(contentType, charSet, contentEncoding, body);
        contents.plain = this.getPlain(contentType, charSet, contentEncoding, body);
      }
    }

    // Assign meta data and email content to the email object
    return Object.assign(email, {
      to: to,
      from: from,
      subject: subject,
      date: date,
      plain: contents.plain,
      html: contents.html,
    });
  }

  /**
   * Does the content type contain a boundary option
   *
   * @param {string} contentType Content-Type
   * @returns {boolean}
   */
  private isBoundary(contentType: string): boolean {
    return /.*?boundary="(.*?)"/.test(contentType);
  }

  /**
   * Does the content type a multipart alternative
   *
   * @param {string} contentType Content-Type
   * @returns {boolean}
   */
  private isAlternative(contentType: string): boolean {
    return /^multipart\/alternative/.test(contentType);
  }

  /**
   * Does the content type html
   *
   * @param {string} contentType Content-Type
   * @returns {boolean}
   */
  private isHTML(contentType: string): boolean {
    return /^text\/html/.test(contentType);
  }

  /**
   * Does the content type plain text
   *
   * @param {string} contentType Content-Type
   * @returns {boolean}
   */
  private isPlain(contentType: string): boolean {
    return /^text\/plain/.test(contentType);
  }

  /**
   * Get the boundary value from the content type
   *
   * @param {string} contentType Content-Type
   * @returns {string} Boundary
   */
  private getBoundary(contentType: string): string {
    if (this.isAlternative(contentType)) {
      return contentType.replace(/^multipart\/alternative; ?boundary="(.*?)"/, '$1').trim();
    }

    if (this.isBoundary(contentType)) {
      return contentType.replace(/.*?boundary="(.*?)"/, '$1').trim();
    }

    return null;
  }

  /**
   * Parse email content and return found headers
   *
   * @param {string} original Original Email or Origin Email Part
   * @returns {EmailComponents} Email Components
   */
  private getHeaders(original: string): EmailComponents {
    const components: string[] = original.trim().split(/^$/gm);
    const headerString: string = components.shift();

    const headers = headerString.split(/[\r\n]/gm);

    const parsedComponents: EmailComponents = {
      to: null,
      from: null,
      subject: null,
      date: null,
      contentType: 'text/html',
      charSet: 'utf-8',
      contentEncoding: '8bit',
      boundary: null,
      body: components.join('\n').trim(),
    } as any;

    headers.forEach((header: string) => {
      const components: string[] = header.split(':');
      const key: string = components[0].trim();

      if (components.length > 1) {
        const value: string = components[1].trim();

        switch (key.toLowerCase()) {
          case Headers.TO:
            parsedComponents.to = this.getContact(value);
            break;
          case Headers.FROM:
            parsedComponents.from = this.getContact(value);
            break;
          case Headers.SUBJECT:
            parsedComponents.subject = value;
            break;
          case Headers.DATE:
            parsedComponents.date = new Date(value);
            break;
          case Headers.CONTENT_TYPE:
            parsedComponents.contentType = value;
            parsedComponents.charSet = value.replace(/.*?charset=(.*?)$/gi, '$1').toLowerCase();
            parsedComponents.boundary = this.getBoundary(value);
            break;
          case Headers.CONTENT_ENCODING:
            parsedComponents.contentEncoding = value;
            break;
        }
      } else if (!parsedComponents.boundary) {
        parsedComponents.boundary = this.getBoundary(key);
      }
    });

    return parsedComponents;
  }

  /**
   * Parse the contact information and return name and email
   *
   * @param {string} orgContact Original Contact
   * @returns {EmailContact} Email Contact
   */
  private getContact(orgContact: string): Email.Contact {
    const contact: Email.Contact = {
      name: null,
      email: null,
    };

    const email = orgContact.replace(/.*?<(.*?)>/, '$1');
    const name = orgContact.replace(/\W?<.*?>/, '');
    if (!name || name === email) {
      contact.email = email;
    } else {
      contact.name = name;
      contact.email = email;
    }

    return contact;
  }

  /**
   * Parse the provided content and return the normalized html portion of the email
   *
   * @param {string} contentType Email Content Type
   * @param {string} charSet Email Character Set
   * @param {string} contentEncoding Email Content Encoding
   * @param {string} body Email Body
   * @returns {string} Normalized Email Body in HTML
   */
  private getHTML(
    contentType: string,
    charSet: string,
    contentEncoding: string,
    body: string
  ): string {
    if (this.isHTML(contentType)) {
      let normalize: string = this.normalizeEncoding(charSet, contentEncoding, body);
      normalize = normalize.replace(/[\r\n\t]/g, '').replace(/\s{2,}/g, '');
      normalize = normalize.replace(/.*?<body(.*?)>(.*)<\/(body)>.*/, '<div$1>$2</div>');
      return normalize;
    }
    return null;
  }

  /**
   * Parse the provided content and return the normalized plain text portion of the email in html
   *
   * @param {string} contentType Email Content Type
   * @param {string} charSet Email Character Set
   * @param {string} contentEncoding Email Content Encoding
  c
   * @returns {string} Normalized Email Body in HTML
   */
  private getPlain(
    contentType: string,
    charSet: string,
    contentEncoding: string,
    body: string
  ): string {
    if (this.isPlain(contentType)) {
      let normalize: string = this.normalizeEncoding(charSet, contentEncoding, body);
      normalize = normalize.replace(/&amp;/g, '&');

      return this.convertTextToHtml(normalize);
    }
    return null;
  }

  /**
   * Parse the email looking for the boundary parts and return normalized html and plain text components of email
   *
   * @param {string} contentType Email Content Type
   * @param {string} boundary Boundary
   * @param {string} body Email Body
   * @returns {EmailContents} Email Contents
   */
  private getBoundaryParts(contentType: string, boundary: string, body: string): EmailContents {
    const contents: EmailContents = {
      plain: null,
      html: null,
    };
    if (this.isAlternative(contentType) && boundary) {
      const bodyComponents = body.split(`--${boundary}`);

      bodyComponents.forEach((bodyComponent: string) => {
        if (bodyComponent.length > 0 && bodyComponent !== '--') {
          const { contentType, charSet, contentEncoding, body } = this.getHeaders(bodyComponent);
          const html = this.getHTML(contentType, charSet, contentEncoding, body);
          const plain = this.getPlain(contentType, charSet, contentEncoding, body);

          if (!contents.html && !!html) {
            contents.html = html;
          }
          if (!contents.plain && !!plain) {
            contents.plain = plain;
          }
        }
      });
    }
    return contents;
  }

  /**
   * Attempt to normalize the email content to utf-8
   *
   * @param {string} charSet Character Set
   * @param {string} contentEncoding Content Encoding
   * @param {string} body Email Body
   * @returns {string} UTF-8 version of email
   */
  private normalizeEncoding(charSet: string, contentEncoding: string, body: string): string {
    if (contentEncoding === ContentEncoding.QUOTED) {
      body = quotedPrintable.decode(body);
    } else if (contentEncoding === ContentEncoding.BIT_7) {
      body = body.replace(/(.)[\r\n](.)/g, '$1$2');
    }
    if (iconv.encodingExists(charSet)) {
      return iconv.decode(Buffer.from(body, 'binary'), charSet);
    }
    return body;
  }

  /**
   * Convert plain text version of email to a renderable html version with embedded links
   *
   * @param {string} plain Plain text version of email
   * @returns {string} Html version of plain text email
   */
  private convertTextToHtml(plain: string) {
    let html = '';
    plain = plain.trim();
    if (plain.length > 0) {
      html += '<p>'; // begin by creating paragraph
      for (let counter = 0; counter < plain.length; counter++) {
        switch (plain[counter]) {
          case '\n':
          case '\r':
            if (plain[counter + 1] === '\n' || plain[counter + 1] === '\r') {
              html += '</p><p>';
              counter++;
            } else html += '<br />';
            break;

          case ' ':
            if (plain[counter - 1] != ' ' && plain[counter - 1] != '\t') html += ' ';
            break;

          case '\t':
            if (plain[counter - 1] != '\t') html += ' ';
            break;
          default:
            html += plain[counter];
        }
      }
      html += '</p>'; // finally close paragraph
    }

    // Convert links to an anchor tag
    html = html.replace(
      /((ftp|https?):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?)/g,
      '<a href="$1">$1</a>'
    );
    html = html.replace(/&/g, '&amp;');
    const links = html.match(/<a.*?href=".*?".*?>/g);
    if (links && links.length > 0) {
      links.forEach((link: string) => {
        const regEx = new RegExp(link, 'g');
        html = html.replace(regEx, link.replace(/&amp;/g, '&'));
      });
    }
    // Convert carrots to html encoded
    html = html.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    // Fix anchor tags
    html = html.replace(/&lt;a(.*?)&gt;/g, '<a$1>').replace(/&lt;\/a&gt;/g, '</a>');
    // Fix paragraph tags
    html = html.replace(/&lt;p&gt;/g, '<p>').replace(/&lt;\/p&gt;/g, '</p>');
    // Fix break tags
    html = html.replace(/&lt;br \/&gt;/g, '<br />');
    // Fix for duplicate & characters
    html = html.replace(/&&amp;amp;/g, '&amp;');
    // Remove empty paragraphs
    html = html.replace(/<p><\/p>/g, '');
    return html;
  }
}
