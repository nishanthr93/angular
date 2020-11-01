import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurdmoduleComponent } from './curdmodule/curdmodule.component';



@NgModule({
  declarations: [CurdmoduleComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CurdmoduleComponent
  ]
  
})
export class CrudmoduleModule { 
  
}
