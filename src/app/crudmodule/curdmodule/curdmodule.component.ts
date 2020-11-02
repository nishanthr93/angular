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
  colors = [
    {
      color: "red",
      value: "#f00"
    },
    {
      color: "green",
      value: "#0f0"
    },
    {
      color: "blue",
      value: "#00f"
    },
    {
      color: "cyan",
      value: "#0ff"
    },
    {
      color: "magenta",
      value: "#f0f"
    },
    {
      color: "yellow",
      value: "#ff0"
    },
    {
      color: "black",
      value: "#000"
    }
  ];
  echo(event){
    this.input_name = event.target.value;
  }
}
