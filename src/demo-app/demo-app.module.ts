import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DemoAppComponent } from './demo-app.component';

import { WshContactChipModule } from '../lib/contact-chip';

@NgModule({
  declarations: [
    DemoAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WshContactChipModule
  ],
  providers: [],
  bootstrap: [DemoAppComponent]
})
export class DemoAppModule { }
