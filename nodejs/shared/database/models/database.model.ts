export namespace Database {
  export enum Type {
    MARIADB = 'maria_db',
  }

  export interface SqlBindings {
    sql: string;
    values: any[];
  }

  export interface Meta {
    numberRows?: number;
    affectedRows?: number;
    insertId?: number;
    warningStatus: number;
  }

  export interface Results<T> {
    records: T;
    meta: Meta;
  }
}
