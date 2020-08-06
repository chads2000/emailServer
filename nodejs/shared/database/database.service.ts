import { Logger, Injectable } from '@nestjs/common';
import { PoolConnection } from 'mariadb';

import { Observable, from, of } from 'rxjs';
import { catchError, mergeMap, tap, retry } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Database } from './models/database.model';
import { MariaDbService } from './mariadb/mariadb.service';

const logger = new Logger('DatabaseService');

@Injectable()
export class DatabaseService {
  private _connector: Observable<any>;
  private dbType: Database.Type = null;

  constructor(readonly mariaDb: MariaDbService) {
    if (environment.databases.mariadb) {
      this.dbType = Database.Type.MARIADB;

      this.connect();
    }
  }

  connect() {
    if (environment.databases.mariadb) {
      this.mariaDb.setPool(
        environment.databases.mariadb.host,
        environment.databases.mariadb.port,
        environment.databases.mariadb.user,
        environment.databases.mariadb.password,
        environment.databases.mariadb.database
      );
    }
  }

  private getConnector() {
    if (!this._connector) {
      if (this.dbType === Database.Type.MARIADB) {
        this._connector = this.mariaDb.connection;
      }
    }

    if (!this._connector) {
      throw new Error('Database connection not defined');
    }
    return this._connector;
  }

  insert(sql: string, values?: any[]): Observable<any> {
    return this.query(sql, values);
  }

  update(sql: string, values?: any[]): Observable<any> {
    return this.query(sql, values);
  }

  query(sql: string, values?: any[]): Observable<any> {
    if (this.dbType === Database.Type.MARIADB) {
      return this.mariaDbQuery(sql, values, 0);
    }
  }

  private errorHandler(error: any, sql: string, values?: any[], kill: number = 0): Observable<any> {
    logger.warn({
      DatabaseService: error,
    });

    logger.log({ code: error.code, connectionLost: error.code === 'ER_CMD_CONNECTION_CLOSED' });
    if (error.code === 'ER_CMD_CONNECTION_CLOSED' && kill < 10) {
      this._connector = null;
      this.connect();

      if (this.dbType === Database.Type.MARIADB) {
        return this.mariaDbQuery(sql, values, kill + 1);
      }
    }
    throw new Error(`Error in SQL: ${error}`);
  }

  private mariaDbQuery(sql: string, values?: any[], kill: number = 0): Observable<any> {
    let _connection: PoolConnection = null;

    return this.getConnector().pipe(
      mergeMap((connection: PoolConnection) => {
        _connection = connection;
        if (values && values.length > 0) {
          return from(_connection.query(sql, values));
        }
        return from(_connection.query(sql));
      }),
      tap(() => {
        _connection.end();
      }),
      catchError(error => {
        if (_connection) {
          _connection.end();
        }
        return this.errorHandler(error, sql, values, kill);
      })
    );
  }
}
