import { Email, Emails } from '@mono/root_shared/models';
import { Action } from '@ngrx/store';

export namespace EmailsActions {
  export enum ActionTypes {
    LOAD = '[Emails] Load',
    LOADED = '[Emails] Loaded',
    EMAIL_LOAD = '[Email] Load',
    EMAIL_LOADED = '[Email] Loaded',
    EMAIL_DELETE = '[Email] Delete',
    EMAIL_DELETED = '[Email] Deleted',
  }

  export class Load implements Action {
    type = ActionTypes.LOAD;
    constructor(public payload: any) {}
  }

  export interface LoadedPayload {
    emails: Emails;
  }

  export class Loaded implements Action {
    type = ActionTypes.LOADED;
    constructor(public payload: LoadedPayload) {}
  }

  export interface EmailLoadPayload {
    id: number;
  }

  export class EmailLoad implements Action {
    type = ActionTypes.EMAIL_LOAD;
    constructor(public payload: EmailLoadPayload) {}
  }

  export interface EmailLoadedPayload {
    email: Email;
  }

  export class EmailLoaded implements Action {
    type = ActionTypes.EMAIL_LOADED;
    constructor(public payload: EmailLoadedPayload) {}
  }

  export class EmailDelete implements Action {
    type = ActionTypes.EMAIL_DELETE;
    constructor(public payload: EmailLoadPayload) {}
  }

  export class EmailDeleted implements Action {
    type = ActionTypes.EMAIL_DELETED;
    constructor(public payload: any) {}
  }

  export type Actions = Load | Loaded | EmailLoad | EmailLoaded | EmailDelete | EmailDeleted;
}
