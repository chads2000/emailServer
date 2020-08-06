import 'jasmine';

import { Injectable, Logger } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { of } from 'rxjs';

import { Categories } from '@rootShared/models/categories.models';
import { CategoriesDBService as _CategoriesDBService } from './categories.service';
import { DatabaseService } from '../database.service';
import { MariaDBCategories } from '../mariadb/schema/categories.schema';
import { MockAllCategoriesDB } from '../mariadb/schema/testing/mocks/allCategories';
import { Database } from '../models';
import { MockDatabaseService } from '../testing/database.service.mock';

(Logger as any).logLevels = ['error', 'warn'];

describe('CategoriesDBService', () => {
  let service: _CategoriesDBService = null;

  beforeEach(async () => {
    @Injectable()
    class CategoriesDBService extends _CategoriesDBService {}

    const module = await Test.createTestingModule({
      providers: [
        CategoriesDBService,
        MariaDBCategories,
        { provide: DatabaseService, useClass: MockDatabaseService },
      ],
    }).compile();

    service = module.get<CategoriesDBService>(CategoriesDBService);
  });

  it('is instantiated', done => {
    expect(service).toBeTruthy();
    done();
  });

  it('Select all Categories', done => {
    spyOn(MockDatabaseService.prototype, 'query').and.returnValue(of(MockAllCategoriesDB));

    const _records = MockAllCategoriesDB.filter((record: any) => {
      return (!!(record as any).meta && (record as any).warningStatus) === false;
    }).map((record: any) => {
      return {
        id: record.CategoryID,
        parentCategoryId: record.ParentCategoryID,
        name: record.Name,
      };
    });

    service.select().subscribe((results: Database.Results<Categories>) => {
      expect(results).toBeTruthy();
      expect(results.records).toBeTruthy();
      expect(results.records).toEqual(_records);
      done();
    });
  });
});
