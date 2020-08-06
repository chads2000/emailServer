import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EmailListComponent } from './email_list.component';
import { EmailListItemModule } from '../email_list_item/email_list_item.module';

@NgModule({
  declarations: [EmailListComponent],
  imports: [CommonModule, EmailListItemModule],
  exports: [EmailListComponent],
})
export class EmailListModule {}
