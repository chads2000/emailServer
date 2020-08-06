import { Injectable } from '@angular/core';
import { Email } from '@mono/root_shared/models';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';

import { EmailsActions } from '../../store/emails/emails.actions';
import { EmailsReducers } from '../../store/emails/emails.reducers';
import { EmailsState } from '../../store/emails/emails.state';
import { State } from '../../store/state';

@Injectable()
export class EmailsService {
  readonly isViewOpen$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  readonly emails$: Observable<EmailsState.Emails>;
  readonly email$: Observable<Email>;

  deleting = false;

  constructor(private store: Store<State>) {
    this.emails$ = this.store.select(EmailsReducers.getAllEmails);
    this.email$ = this.store.select(EmailsReducers.getLoadedEmail);
  }

  init(): void {
    this.store.dispatch(new EmailsActions.Load(null));
  }

  get(id: number): void {
    this.store.dispatch(new EmailsActions.EmailLoad({ id }));
  }

  delete(id: number): void {
    this.deleting = true;
    this.store.dispatch(new EmailsActions.EmailDelete({ id }));
  }

  contactName(contact: Email.Contact): string {
    const name: string = contact?.name ?? null;
    const email: string = contact?.email ?? null;
    if (name && email) {
      return `${name} <${email}>`;
    }
    return email;
  }
}
