import { Injectable } from '@angular/core';
import { Email, Emails } from '@mono/root_shared/models';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { exhaustMap, map, mergeMap, take } from 'rxjs/operators';

import { EmailsActions } from './emails.actions';
import { EmailsReducers } from './emails.reducers';
import { EmailsState } from './emails.state';
import { State } from '../state';
import { EmailsApiService } from '../../services/apis/emails/emails.service';

@Injectable()
export class EmailsEffects {
  @Effect()
  load$: Observable<void> = this.actions$.pipe(
    ofType(EmailsActions.ActionTypes.LOAD),
    exhaustMap(() => {
      return this.loadEmails$();
    })
  );

  @Effect()
  loadEmail$: Observable<void> = this.actions$.pipe(
    ofType(EmailsActions.ActionTypes.EMAIL_LOAD),
    exhaustMap((action: EmailsActions.Actions) => {
      return this.email$(action.payload.id);
    })
  );

  @Effect()
  deleteEmail$: Observable<void> = this.actions$.pipe(
    ofType(EmailsActions.ActionTypes.EMAIL_DELETE),
    exhaustMap((action: EmailsActions.Actions) => {
      return this.emailDelete$(action.payload.id);
    })
  );

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private emailsApiService: EmailsApiService
  ) {}

  private loadEmails$(): Observable<EmailsActions.Loaded | any> {
    return this.store.select(EmailsReducers.getAllEmails).pipe(
      take(1),
      mergeMap((emails: EmailsState.Emails) => {
        if (Object.keys(!!emails ? emails : {}).length === 0) {
          return this.emailsApiService.all();
        }
        return Object.values(emails);
      }),
      map((emails: Emails) => {
        return new EmailsActions.Loaded({ emails });
      })
    );
  }

  private email$(id: number): Observable<EmailsActions.Loaded | any> {
    return this.store.select(EmailsReducers.getAllEmails).pipe(
      take(1),
      mergeMap((emails: EmailsState.Emails) => {
        if (!!emails[id] && !!emails[id].original) {
          return of(emails[id]);
        }
        return this.emailsApiService.get(id);
      }),
      map((email: Email) => {
        return new EmailsActions.EmailLoaded({ email });
      })
    );
  }

  private emailDelete$(id: number): Observable<EmailsActions.Loaded | any> {
    return this.emailsApiService.delete(id).pipe(
      map((email: Email) => {
        return new EmailsActions.EmailDeleted({ email });
      })
    );
  }
}
