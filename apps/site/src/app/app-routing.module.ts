import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './homepage/homepage.module#HomepageModule',
    pathMatch: 'full'
  },
  {
    path: '404',
    loadChildren: './not_found/not_found.module#NotFoundModule',
    pathMatch: 'full'
  },
  {
    path: '404/',
    loadChildren: './not_found/not_found.module#NotFoundModule',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: './not_found/not_found.module#NotFoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
