import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EmailViewComponent } from './email_view.component';
import { ServicesModule } from '../../services/services.module';

@NgModule({
  declarations: [EmailViewComponent],
  imports: [CommonModule, ServicesModule],
  exports: [EmailViewComponent],
})
export class EmailViewModule {}
