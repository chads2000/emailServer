import { Component, Inject, Input } from '@angular/core';
import { Email, Emails } from '@mono/root_shared/models';

@Component({
  selector: 'app-email-list',
  templateUrl: './email_list.component.html',
  styleUrls: ['./email_list.component.scss'],
})
export class EmailListComponent {
  @Input() emails: Emails;

  constructor() {}
}
