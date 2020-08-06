import { Logger } from '@nestjs/common';
import * as moment from 'moment';

import { Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { v1 as uuidv1 } from 'uuid';

import { DatabaseService } from './database.service';
import { Database } from './models';

const logger = new Logger('BaseService');

export abstract class BaseService<TS> {
  constructor(protected readonly database: DatabaseService, protected readonly dbService: TS) {}

  protected checkDatabaseService(): boolean {
    if (this.dbService) {
      return true;
    }
    throw new Error('No database connected');
  }

  protected _get<T>(id: number): Observable<Database.Results<T>> {
    this.checkDatabaseService();

    const { sql, values } = (this.dbService as any).select(id);
    return this.database.query(sql, values).pipe(
      map((results: any) => {
        return (this.dbService as any).normalize(results) as Database.Results<T>;
      })
    );
  }

  protected _select<T>(): Observable<Database.Results<T>> {
    this.checkDatabaseService();

    const { sql, values } = (this.dbService as any).select();
    return (this.database as any).query(sql, values).pipe(
      map((results: any) => {
        return (this.dbService as any).normalize(results) as Database.Results<T>;
      })
    );
  }

  protected _updateWithOptions<T1, T2, T3>(
    record: T1,
    options: T3
  ): Observable<Database.Results<T2>> {
    const { sql, values } = (this.dbService as any).update((record as any).id, options);
    return this.database.update(sql, values).pipe(
      map((meta: any) => {
        const updatedRecord: any = Object.assign(record, options);
        updatedRecord.modifiedAt = moment();

        const returnRecord = {
          records: [updatedRecord],
          meta: meta,
        };

        return (returnRecord as any) as Database.Results<T2>;
      })
    );
  }

  protected _delete<T1, T2, T3>(record: T1): Observable<Database.Results<T2>> {
    this.checkDatabaseService();

    const options: any = {
      deleted: true,
    };

    return this._updateWithOptions<T1, T2, T3>(record, options);
  }

  getByUUID<T>(uuid: string): Observable<Database.Results<T>> {
    this.checkDatabaseService();

    const { sql, values } = (this.dbService as any).select(null, { uuid: uuid });
    return this.run(sql, values) as Observable<Database.Results<T>>;
  }

  countByUUID(uuid: string): Observable<Database.Results<number>> {
    this.checkDatabaseService();

    const { sql, values } = (this.dbService as any).select(null, { uuid: uuid }, true);
    return this.count(sql, values);
  }

  getIdByUUID(uuid: string): Observable<number> {
    return this.getByUUID(uuid).pipe(
      map((results: Database.Results<any>) => {
        if (results && results.records && results.records.length === 1) {
          return results.records[0].id;
        }
        return null;
      })
    );
  }

  protected count(sql: string, values: any[]): Observable<Database.Results<number>> {
    return this.run(sql, values).pipe(
      map(results => {
        return this.getCount(results);
      })
    );
  }

  protected run<T>(sql: string, values: any[]): Observable<Database.Results<T | number[]>> {
    return this.database.query(sql, values).pipe(
      map((results: any) => {
        return (this.dbService as any).normalize(results);
      })
    );
  }

  protected getCount(results): Database.Results<number> {
    return {
      records: results.records && results.records.length === 1 ? results.records[0] : null,
      meta: results.meta,
    };
  }

  protected uuid(): Observable<string> {
    let uuid: string = null;

    return of(uuidv1()).pipe(
      mergeMap((_uuid: string) => {
        uuid = _uuid;

        return this.countByUUID(uuid);
      }),
      mergeMap((users: Database.Results<number>) => {
        if (users.records && users.records > 0) {
          return this.uuid();
        }
        return of(uuid);
      })
    );
  }
}
