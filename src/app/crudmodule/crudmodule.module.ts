import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurdmoduleComponent } from './curdmodule/curdmodule.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [CurdmoduleComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CurdmoduleComponent
  ]
  
})
export class CrudmoduleModule { 
  
}
