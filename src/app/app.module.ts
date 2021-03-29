import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateRadioComponent } from './components/template-radio/template-radio.component';
import { TemplateButtonComponent } from './components/template-button/template-button.component';
import { TemplateTableRadioComponent } from './components/template-table-radio/template-table-radio.component';
import { TemplateHeaderComponent } from './components/template-header/template-header.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateRadioComponent,
    TemplateButtonComponent,
    TemplateTableRadioComponent,
    TemplateHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
