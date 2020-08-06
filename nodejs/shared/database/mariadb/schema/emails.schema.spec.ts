import 'jasmine';

import { Injectable } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { MariaDBCategories as _MariaDBCategories } from './categories.schema';
import { MockAllCategoriesDB } from './testing/mocks/allCategories';

const cleanSqlString = (value: string): string => {
  return value
    .replace(/[\r\n]+/gm, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

describe('MariaDBCategories', () => {
  let service: _MariaDBCategories = null;

  beforeEach(async () => {
    @Injectable()
    class MariaDBCategories extends _MariaDBCategories {}

    const module = await Test.createTestingModule({
      imports: [],
      controllers: [],
      providers: [MariaDBCategories],
    }).compile();

    service = module.get<MariaDBCategories>(MariaDBCategories);
  });

  it('is instantiated', done => {
    expect(service).toBeTruthy();
    done();
  });

  it('Check Table/Field Bindings', done => {
    expect(service.categoryID()).toEqual(service.Table + '.' + service.CategoryID);
    expect(service.parentCategoryID()).toEqual(service.Table + '.' + service.ParentCategoryID);
    expect(service.categoryName()).toEqual(service.Table + '.' + service.Name);
    done();
  });

  it('Select By ID SQL Statement', done => {
    const { sql, values } = service.select(1);

    expect(cleanSqlString(sql)).toEqual(
      cleanSqlString(`
SELECT *
FROM ${service.Table}
WHERE ${service.categoryID()} = ?
`)
    );

    expect(values).toEqual([1]);
    done();
  });

  it('Select Count SQL Statement', done => {
    const { sql, values } = service.select(1, null, true);

    expect(cleanSqlString(sql)).toEqual(
      cleanSqlString(`
  SELECT COUNT(${service.categoryID()}) AS Count
  FROM ${service.Table}
  WHERE ${service.categoryID()} = ?
  `)
    );

    expect(values).toEqual([1]);
    done();
  });

  it('Select By Parent ID SQL Statement', done => {
    const { sql, values } = service.select(null, {
      parentCategoryId: 10,
    });

    expect(cleanSqlString(sql)).toEqual(
      cleanSqlString(`
  SELECT *
  FROM ${service.Table}
  WHERE ${service.parentCategoryID()} = ?
  `)
    );

    expect(values).toEqual([10]);
    done();
  });

  it('Select By ID and Parent ID SQL Statement', done => {
    const { sql, values } = service.select(1, {
      parentCategoryId: 10,
    });

    expect(cleanSqlString(sql)).toEqual(
      cleanSqlString(`
  SELECT *
  FROM ${service.Table}
  WHERE ${service.categoryID()} = ? AND ${service.parentCategoryID()} = ?
  `)
    );

    expect(values).toEqual([1, 10]);
    done();
  });

  it('from to return mapped record', done => {
    const [record] = MockAllCategoriesDB;

    expect(service.from(record)).toEqual({
      id: record.CategoryID,
      parentCategoryId: record.ParentCategoryID,
      name: record.Name,
    });
    done();
  });

  it('normalize to return mapped records', done => {
    const results = service.normalize(MockAllCategoriesDB);
    const { records, meta } = results;

    const _records = MockAllCategoriesDB.filter((record: any) => {
      return (!!(record as any).meta && (record as any).warningStatus) === false;
    }).map((record: any) => {
      return {
        id: record.CategoryID,
        parentCategoryId: record.ParentCategoryID,
        name: record.Name,
      };
    });

    expect(records).toEqual(_records);
    done();
  });
});
