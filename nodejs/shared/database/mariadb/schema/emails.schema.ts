import { Injectable } from '@nestjs/common';
import { Email, Emails } from '@rootShared/models/emails.models';
import { getBoolean } from '@rootShared/helpers/getBoolean';

import { MariaDBSchema } from './base.schema';
import { Database } from '../../models';

export interface SelectOptions {
  id?: number;
  read?: boolean;
  deleted?: boolean;
}

@Injectable()
export class MariaDBEmails extends MariaDBSchema {
  Table = 'Emails';

  EmailID = 'EmailID';
  Body = 'Body';
  Read = 'Read';
  Deleted = 'Deleted';

  emailID(): string {
    return this.Table + '.' + this.EmailID;
  }
  body(): string {
    return this.Table + '.' + this.Body;
  }
  read(): string {
    return this.Table + '.' + this.Read;
  }
  deleted(): string {
    return this.Table + '.' + this.Deleted;
  }

  update(id: number, options?: SelectOptions): Database.SqlBindings {
    const sets: string[] = [
      options?.hasOwnProperty('read') ? `${this.read()} = ${options.read ? 1 : 0}` : null,
      options?.hasOwnProperty('deleted') ? `${this.deleted()} = ${options.deleted ? 1 : 0}` : null,
    ].filter(value => !!value);

    const sql: string[] = [
      `
  UPDATE ${this.Table} SET
  `,
      sets.join(', '),
      `WHERE ${this.emailID()} = ?`,
    ].filter(value => !!value);

    const values: any[] = [id].filter(value => !!value);

    return {
      sql: sql.join(' '),
      values: values,
    };
  }

  select(id: number, options?: SelectOptions, count?: boolean): Database.SqlBindings {
    const where: string[] = [
      id ? `${this.emailID()} = ?` : null,
      options?.hasOwnProperty('read') ? `${this.read()} = ${options.read ? 1 : 0}` : null,
      options?.hasOwnProperty('deleted') ? `${this.deleted()} = ${options.deleted ? 1 : 0}` : null,
    ].filter(value => !!value);

    const sql: string[] = [
      `
SELECT ${!!count ? `COUNT(${this.emailID()}) AS Count` : '*'}
FROM ${this.Table}
`,
      where.length > 0 ? `WHERE ${where.join(' AND ')}` : null,
    ];

    return {
      sql: sql.join(' '),
      values: this.values(id, options),
    };
  }

  values(id: number, options?: SelectOptions): any[] {
    return [id ? id : null].filter(value => !!value);
  }

  from(record: any): Email | number {
    return super._from(record, this.EmailID, () => {
      const original: string = record[this.Body].toString().trim(); // Convert Buffer to String

      return {
        id: parseInt(record[this.EmailID], 10),
        original: original, // Convert Buffer to String
        read: getBoolean(record[this.Read]),
        deleted: getBoolean(record[this.Deleted]),
      };
    });
  }

  normalize(
    results: any[] | { meta: any },
    storedProcedure: boolean = false
  ): Database.Results<Emails | number[]> {
    return super._normalize(this, results, storedProcedure);
  }
}
