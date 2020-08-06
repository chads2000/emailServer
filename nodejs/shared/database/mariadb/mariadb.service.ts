import { Logger, Injectable } from '@nestjs/common';
import * as mariadb from 'mariadb';
import { Pool, PoolConnection } from 'mariadb';

import { Observable, from } from 'rxjs';

const logger = new Logger('MariaDbService');

@Injectable()
export class MariaDbService {
  private _pool: Pool = null;
  connectionLimit = 5;

  get connection(): Observable<PoolConnection> {
    return from(this._pool.getConnection());
  }

  constructor() {}

  setPool(host: string, port: number, user: string, password: string, database: string): void {
    this._pool = mariadb.createPool({
      host: host,
      port: port,
      user: user,
      password: password,
      database: database,
      connectionLimit: this.connectionLimit,
    });
  }
}
