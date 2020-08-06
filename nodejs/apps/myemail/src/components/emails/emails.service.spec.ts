import 'jasmine';

import { Injectable, Logger } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { of } from 'rxjs';

import { CategoriesDTO, ProductsDTO } from '@rootShared/dtos';
import { CategoriesDBService, ProductsDBService } from '@shared/database';
import { MockProductsDBService } from '@shared/database/products/testing/products.service.mock';
import { MockCategoriesDBService } from '@shared/database/categories/testing/categories.service.mock';
import { MockAllCategories } from '@shared/database/categories/testing/mocks/allCategories';
import { MockBootProducts } from '@shared/database/products/testing/mocks/bootProducts';
import { CategoriesAPIController } from './categories.controller';
import { CategoriesAPIService as _CategoriesAPIService } from './categories.service';

(Logger as any).logLevels = ['error', 'warn'];

describe('Categories API', () => {
  let controller: CategoriesAPIController;

  beforeEach(async () => {
    @Injectable()
    class CategoriesAPIService extends _CategoriesAPIService {}

    const module = await Test.createTestingModule({
      controllers: [CategoriesAPIController],
      providers: [
        CategoriesAPIService,
        { provide: CategoriesDBService, useClass: MockCategoriesDBService },
        { provide: ProductsDBService, useClass: MockProductsDBService },
      ],
    }).compile();

    controller = module.get<CategoriesAPIController>(CategoriesAPIController);
  });

  it('is instantiated', done => {
    expect(controller).toBeTruthy();
    done();
  });

  it('Successful GET', done => {
    spyOn(MockCategoriesDBService.prototype, 'select').and.returnValue(
      of({ records: MockAllCategories, meta: null })
    );

    controller.getAll().subscribe(
      (response: CategoriesDTO.GET.Response) => {
        expect(response?.data).toBeTruthy();
        expect(response?.data.length).toBe(MockAllCategories.length);
        expect(response?.data).toBe(MockAllCategories);
        done();
      },
      err => {
        console.log(err);
        expect(err).toBeFalsy();
        done();
      }
    );
  });

  it('Successful GET Product in Category', done => {
    spyOn(MockProductsDBService.prototype, 'searchByCategoryIds').and.returnValue(
      of({ records: MockBootProducts, meta: null })
    );

    controller.getProducts({ id: 6 }).subscribe(
      (response: ProductsDTO.GET.Response) => {
        expect(response?.data).toBeTruthy();
        expect(response?.data.length).toBe(MockBootProducts.length);
        expect(response?.data).toBe(MockBootProducts);
        done();
      },
      err => {
        console.log(err);
        expect(err).toBeFalsy();
        done();
      }
    );
  });
});
