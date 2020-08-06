import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { EmailModule } from './components/email/email.module';

@NgModule({
  declarations: [HomepageComponent],
  imports: [CommonModule, EmailModule, HomepageRoutingModule],
  exports: [HomepageComponent],
})
export class HomepageModule {}
