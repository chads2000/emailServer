import { AfterContentInit, Component, Inject } from '@angular/core';
import { Email, Emails } from '@mono/root_shared/models';
import { map, tap } from 'rxjs/operators';

import { Observable, BehaviorSubject } from 'rxjs';
import { EmailsService } from '../../services/email.service';
import { EmailsState } from '../../../store/emails/emails.state';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements AfterContentInit {
  readonly isViewOpen$: Observable<boolean>;
  readonly emails$: Observable<Emails>;
  readonly email$: Observable<Email>;

  private inited = false;

  constructor(@Inject(EmailsService) private emailsService: EmailsService) {
    this.emails$ = this.loadEmails();
    this.email$ = this.loadEmail();

    this.isViewOpen$ = this.emailsService.isViewOpen$;
  }

  ngAfterContentInit(): void {
    this.emailsService.init();
  }

  private loadEmails(): Observable<Emails> {
    return this.emailsService.emails$.pipe(
      map((emails: EmailsState.Emails) => {
        return emails ? Object.values(emails) : [];
      }),
      map((emails: Emails) => {
        return this.sortEmails(emails);
      }),
      tap((emails: Emails) => {
        if (emails && emails.length > 0) {
          if (!this.inited || this.emailsService.deleting) {
            this.emailsService.get(emails[0].id);
          }
          this.emailsService.deleting = false;
          this.inited = true;
        }
      })
    );
  }

  private loadEmail(): Observable<Email> {
    return this.emailsService.email$.pipe(
      tap((email: Email) => {
        if (!!email) {
          this.emailsService.isViewOpen$.next(true);
        }
      })
    );
  }

  private sortEmails(emails: Emails): Emails {
    return emails.sort((emailA: Email, emailB: Email) => {
      if (emailA.date === emailB.date) {
        if (emailA.subject > emailB.subject) {
          return 1;
        }
        if (emailA.subject < emailB.subject) {
          return -1;
        }
        return 0;
      }

      return emailA.date.getTime() - emailB.date.getTime();
    });
  }
}
