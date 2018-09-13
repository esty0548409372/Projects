import { Component, OnInit } from '@angular/core';
import { MyEnum } from "../model/model.module";
@Component({
  selector: 'app-background-color',
  templateUrl: './background-color.component.html',
  styleUrls: ['./background-color.component.css']
})
export class BackgroundColorComponent implements OnInit {
  enum: MyEnum;
  list:string[];
  constructor() { 
    console.log("ytt6u");
    this.list=Object.keys(this.enum);
    this.list=this.list.slice(this.list.length/2);
    console.log(this.list);
    
  }

  ngOnInit() {
    
  }
  backgroundChange(color){
    document.body.style.backgroundColor=color;
  }

}
