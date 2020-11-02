import { Component } from '@angular/core';
import { CrudService } from "./services/crud.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  constructor( public dataServices:CrudService){

  }

  increase(){
    this.dataServices.count++;
  }
  decrease(){
    this.dataServices.count--;
  }
}
