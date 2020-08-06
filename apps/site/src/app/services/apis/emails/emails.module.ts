import { NgModule } from '@angular/core';

import { EmailsApiService } from './emails.service';

@NgModule({
  providers: [EmailsApiService],
  exports: [EmailsApiService],
})
export class EmailsAPIModule {}
