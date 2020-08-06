import { Injectable } from '@angular/core';
import { EmailsDTO } from '@mono/root_shared/dtos';
import { Email, Emails } from '@mono/root_shared/models';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class EmailsApiService {
  readonly url = 'http://localhost:3030/emails';

  constructor() {}

  all(): Observable<Emails> {
    return ajax({
      url: this.url,
      method: 'GET',
    }).pipe(
      map((response: AjaxResponse) => {
        return (response.response as EmailsDTO.GET.Response).data;
      }),
      map((emails: Emails) => {
        return emails.map((email: Email) => {
          email.date = new Date(email.date);
          return email;
        });
      })
    );
  }

  get(id: number): Observable<Email> {
    return ajax({
      url: `${this.url}/${id}`,
      method: 'GET',
    }).pipe(
      map((response: AjaxResponse) => {
        return (response.response as EmailsDTO.GET.Response).data[0];
      }),
      map((email: Email) => {
        email.date = new Date(email.date);
        return email;
      })
    );
  }

  delete(id: number): Observable<Email> {
    return ajax({
      url: `${this.url}/${id}`,
      method: 'DELETE',
    }).pipe(
      map((response: AjaxResponse) => {
        return (response.response as EmailsDTO.GET.Response).data[0];
      }),
      map((email: Email) => {
        email.date = new Date(email.date);
        return email;
      })
    );
  }
}
