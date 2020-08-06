import { environment } from '@environments/environment';
import { Logger, Injectable } from '@nestjs/common';
import { Email, Emails } from '@rootShared/models/emails.models';
import { MariaDBEmails } from '@shared/database/mariadb/schema/emails.schema';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base.service';
import { DatabaseService } from '../database.service';
import { Database } from '../models';

const logger = new Logger('EmailsDBService');

export interface SelectOptions {
  read?: boolean;
  deleted?: boolean;
}

@Injectable()
export class EmailsDBService extends BaseService<MariaDBEmails> {
  constructor(database: DatabaseService, mariaDbService: MariaDBEmails) {
    super(database, environment.databases.mariadb ? mariaDbService : null);
  }

  /**
   * Get all the emails from the database with only email meta data
   *
   * @param {number} id
   * @returns {Observable<Database.Results<Emails>>}
   */
  select(options: SelectOptions = { deleted: false }): Observable<Database.Results<Emails>> {
    this.checkDatabaseService();

    const { sql, values } = (this.dbService as any).select(null, options);
    return (this.database as any).query(sql, values).pipe(
      map((results: any) => {
        return (this.dbService as any).normalize(results) as Database.Results<Emails>;
      })
    );
  }

  /**
   * Get a single email from the database with parsed email content
   *
   * @param {number} id
   * @returns {Observable<Database.Results<Emails>>}
   */
  get(id: number): Observable<Database.Results<Emails>> {
    return super._get<Emails>(id);
  }

  /**
   * Get a single email from the database with parsed email content
   *
   * @param {Email} email
   * @returns {Observable<Database.Results<Emails>>}
   */
  delete(email: Email): Observable<Database.Results<Emails>> {
    return super._updateWithOptions<Email, Emails, SelectOptions>(email, { deleted: true });
  }
}
