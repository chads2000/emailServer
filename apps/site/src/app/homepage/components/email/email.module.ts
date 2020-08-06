import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EmailComponent } from './email.component';
import { EmailViewModule } from '../email_view/email_view.module';
import { EmailListModule } from '../email_list/email_list.module';
import { ServicesModule } from '../../services/services.module';

@NgModule({
  declarations: [EmailComponent],
  imports: [CommonModule, EmailListModule, EmailViewModule, ServicesModule],
  exports: [EmailComponent],
})
export class EmailModule {}
