import { Database } from '../../models';

export abstract class MariaDBSchema {
  static Table: string;

  abstract select(number, any?, boolean?): Database.SqlBindings;

  abstract values(...any): any[];

  abstract from(any): any | number;

  protected _count(record: any): number {
    if (record && typeof record.Count !== 'undefined' && record.Count !== null) {
      return record.Count;
    }
  }

  protected _from(record: any, primaryKey: string, cb: Function) {
    if (record && typeof record.Count !== 'undefined' && record.Count !== null) {
      return record.Count;
    }

    if (!record || !record[primaryKey]) {
      return null;
    }
    return cb();
  }

  protected _normalize(
    _this: any,
    results: any[] | { meta: any },
    storedProcedure: boolean = false
  ): Database.Results<any | number[]> {
    const records = [];
    const meta: Database.Meta = {
      numberRows: 0,
      warningStatus: 0,
    };
    if (storedProcedure && results && results[0]) {
      results = results[0];
    }
    if ((results as any).meta && (results as any).warningStatus) {
      meta.warningStatus = (results as any).meta.warningStatus;
      meta.numberRows = (results as any).meta.length;
      delete (results as any).meta;
    }

    if (results && (results as any[]).length > 0) {
      (results as any[]).forEach((record: any) => {
        records.push(_this.from(record) as any);
      });
    }
    return { records: records, meta: meta };
  }
}
