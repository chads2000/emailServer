import { NgModule } from '@angular/core';

import { EmailsService } from './email.service';

@NgModule({
  providers: [EmailsService],
  exports: [EmailsService],
})
export class ServicesModule {}
