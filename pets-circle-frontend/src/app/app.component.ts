import { Component, OnInit } from '@angular/core';
import { DataService } from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private data:DataService){

  }
  message :string;
  title = 'front-end';
  ngOnInit(){
    
    this.data.currentMessage.subscribe(message =>this.message = message);
  }
}
