export const MockAllCategoriesDB = [
  { CategoryID: 4, ParentCategoryID: null, Name: 'Apparel' },
  { CategoryID: 5, ParentCategoryID: null, Name: 'Skis' },
  { CategoryID: 6, ParentCategoryID: null, Name: 'Boots' },
  { CategoryID: 7, ParentCategoryID: 4, Name: 'Jackets' },
  { CategoryID: 8, ParentCategoryID: 4, Name: 'Pants' },
  { CategoryID: 13, ParentCategoryID: null, Name: 'Male' },
  { CategoryID: 14, ParentCategoryID: null, Name: 'Female' },
];

(MockAllCategoriesDB as any).meta = [];
