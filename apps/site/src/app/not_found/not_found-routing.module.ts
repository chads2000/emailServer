import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not_found.component';

export const NotFoundRoutes: Routes = [
  { path: '', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(NotFoundRoutes)],
  exports: [RouterModule]
})
export class NotFoundRoutingModule {}
