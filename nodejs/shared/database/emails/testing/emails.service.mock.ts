import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { Category, Categories } from '@rootShared/models/categories.models';
import { Database } from '../../models/database.model';

@Injectable()
export class MockCategoriesDBService {
  constructor() {}

  get(id: number): Observable<Database.Results<Category>> {
    return of('NO DATA SET, DID YOU SPY THE FUNCTION CategoriesDBService.get()?' as any);
  }

  select(): Observable<Database.Results<Categories>> {
    return of('NO DATA SET, DID YOU SPY THE FUNCTION CategoriesDBService.select()?' as any);
  }
}
