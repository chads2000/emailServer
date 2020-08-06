export interface Email {
  id: number;
  to: Email.Contact;
  from: Email.Contact;
  subject: string;
  date: Date;
  headers: string;
  plain: string;
  html: string;
  original: string;
  read: boolean;
  deleted: boolean;
}

export type Emails = Email[];

export namespace Email {
  export interface Contact {
    name: string;
    email: string;
  }
}
