import { Email } from '@mono/root_shared/models';

export namespace EmailsState {
  export interface Emails {
    [id: number]: Email;
  }

  export const initial: EmailsState = {
    emails: null,
    email: null,
  };
}

export interface EmailsState {
  emails: EmailsState.Emails;
  email: Email;
}
