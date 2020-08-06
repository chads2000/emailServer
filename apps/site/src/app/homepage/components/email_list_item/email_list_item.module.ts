import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EmailListItemComponent } from './email_list_item.component';
import { ServicesModule } from '../../services/services.module';

@NgModule({
  declarations: [EmailListItemComponent],
  imports: [CommonModule, ServicesModule],
  exports: [EmailListItemComponent],
})
export class EmailListItemModule {}
