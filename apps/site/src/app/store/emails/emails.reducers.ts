import { Email, Emails } from '@mono/root_shared/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { EmailsActions } from './emails.actions';
import { EmailsState } from './emails.state';
import { State } from '../state';

const emails = (state: EmailsState, payloadEmails: Emails): any => {
  const emails: EmailsState.Emails = {};

  payloadEmails.forEach((email: Email) => {
    emails[email.id] = email;
  });
  return { emails };
};

const email = (state: EmailsState, email: Email): any => {
  const emails: EmailsState.Emails = Object.assign({}, state.emails);
  const newEmail: Email = Object.assign({}, email, { read: true });

  emails[email.id] = newEmail;

  return { emails, email: newEmail };
};

const deleteEmail = (state: EmailsState, email: Email): any => {
  const emails: EmailsState.Emails = Object.assign({}, state.emails);
  delete emails[email.id];

  const newEmail: Email = Object.assign({}, email, { deleted: true });

  return { emails, email: newEmail };
};

export namespace EmailsReducers {
  export function reducer(
    state: EmailsState = EmailsState.initial,
    action: EmailsActions.Actions
  ): EmailsState {
    switch (action.type) {
      case EmailsActions.ActionTypes.LOADED:
        return emails(state, action.payload.emails);

      case EmailsActions.ActionTypes.EMAIL_LOADED:
        return email(state, action.payload.email);

      case EmailsActions.ActionTypes.EMAIL_DELETED:
        return deleteEmail(state, action.payload.email);
      default:
        return state;
    }
  }

  export const getEmails = createFeatureSelector<State, EmailsState>('emails');
  export const getAllEmails = createSelector(getEmails, state => state.emails);

  export const getEmail = createFeatureSelector<State, EmailsState>('email');
  export const getLoadedEmail = createSelector(getEmail, state => state.email);
}
