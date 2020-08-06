/* tslint:disable:no-namespace */
import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class MockDatabaseService {
  constructor() {}

  insert(sql: string, values?: any[]): Observable<any> {
    return of('NO DATA SET, DID YOU SPY THE FUNCTION MockDatabaseService.insert()?');
  }

  update(sql: string, values?: any[]): Observable<any> {
    return of('NO DATA SET, DID YOU SPY THE FUNCTION MockDatabaseService.update()?');
  }

  query(sql: string, values?: any[]): Observable<any> {
    return of('NO DATA SET, DID YOU SPY THE FUNCTION MockDatabaseService.query()?');
  }
}
