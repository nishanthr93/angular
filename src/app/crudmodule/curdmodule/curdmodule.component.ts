import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curdmodule',
  templateUrl: './curdmodule.component.html',
  styleUrls: ['./curdmodule.component.css']
})

export class CurdmoduleComponent implements OnInit {

  public input_name : string;
  
  constructor() { }

  ngOnInit(): void {
  }
  classname = "test";
  echo(event){
    this.input_name = event.target.value;
  }
}
