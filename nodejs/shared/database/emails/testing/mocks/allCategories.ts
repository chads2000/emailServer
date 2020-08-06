import { Categories } from '@rootShared/models/categories.models';

export const MockAllCategories: Categories = [
  { id: 4, parentCategoryId: null, name: 'Apparel' },
  { id: 5, parentCategoryId: null, name: 'Skis' },
  { id: 6, parentCategoryId: null, name: 'Boots' },
  { id: 7, parentCategoryId: 4, name: 'Jackets' },
  { id: 8, parentCategoryId: 4, name: 'Pants' },
  { id: 13, parentCategoryId: null, name: 'Male' },
  { id: 14, parentCategoryId: null, name: 'Female' },
];
