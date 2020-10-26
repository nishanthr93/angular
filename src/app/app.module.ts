import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CrudmoduleModule } from './crudmodule/crudmodule.module';

import { CrudService } from "./services/crud.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CrudmoduleModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule {

    
 }
