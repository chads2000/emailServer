import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage.component';

export const HomepageRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(HomepageRoutes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule {}
