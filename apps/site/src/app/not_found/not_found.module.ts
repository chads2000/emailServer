import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';

import { NotFoundComponent } from './not_found.component';
import { NotFoundRoutingModule } from './not_found-routing.module';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    BrowserTransferStateModule,
    CommonModule,
    HttpClientModule,
    NotFoundRoutingModule
  ],
  exports: [NotFoundComponent]
})
export class NotFoundModule {}
