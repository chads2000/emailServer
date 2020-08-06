import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EmailsAPIModule } from './services/apis/emails/emails.module';
import { Effects } from './store/effects';
import { reducers } from './store/reducers';

const ApiModules = [EmailsAPIModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    AppRoutingModule,
    EffectsModule.forRoot(Effects),
    StoreModule.forRoot(reducers),

    ...ApiModules,
  ],
  exports: [AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
