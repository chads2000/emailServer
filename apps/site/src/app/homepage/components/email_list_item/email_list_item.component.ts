import { Component, Inject, Input } from '@angular/core';
import { Email } from '@mono/root_shared/models';

import { EmailsService } from '../../services/email.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-email-list-item',
  templateUrl: './email_list_item.component.html',
  styleUrls: ['./email_list_item.component.scss'],
})
export class EmailListItemComponent {
  @Input() email: Email;

  readonly isActive$: Observable<boolean>;

  constructor(@Inject(EmailsService) private emailsService: EmailsService) {
    this.isActive$ = emailsService.email$.pipe(
      map((email: Email) => {
        return email && this.email && email.id === this.email.id;
      })
    );
  }

  get id(): number {
    return this.email.id ?? null;
  }

  get subject(): string {
    return this.email.subject ?? null;
  }

  get from(): string {
    return this.emailsService.contactName(this.email.from);
  }

  get fromEmail(): string {
    return this.email.from.email ?? null;
  }

  get date(): Date {
    return this.email.date ? this.email.date : null;
  }

  get read(): boolean {
    return this.email.read ?? null;
  }

  view(): void {
    this.emailsService.get(this.id);
  }
}
