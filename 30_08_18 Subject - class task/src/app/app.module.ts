import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PackageInputComponent } from './components/package-input/package-input.component';
import { TimeRangleInputComponent } from './components/time-rangle-input/time-rangle-input.component';
import { PackageListComponent } from './components/package-list/package-list.component';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PackageInputComponent,
    TimeRangleInputComponent,
    PackageListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
