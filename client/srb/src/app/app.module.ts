import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RebanhoFormComponent } from './rebanho-form/rebanho-form.component';
import { InseminadorFormComponent } from './inseminador-form/inseminador-form.component';
import { RebanhoRelComponent } from './rebanho-rel/rebanho-rel.component';
import { InseminadorRelComponent } from './inseminador-rel/inseminador-rel.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    RebanhoFormComponent,
    InseminadorFormComponent,
    RebanhoRelComponent,
    InseminadorRelComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
