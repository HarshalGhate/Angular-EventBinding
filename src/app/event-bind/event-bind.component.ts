import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  template: `
    <h1>Press Button to generate Event</h1>

    <button (click)="MarvellousEvent()">Marvellous</button>
    <button (click)="MarvellousNewEvent()">Infosystems</button>
    <h1>{{str}}</h1>
    <button (click)="MarvellousEventInfo($event)">EventInformation</button>
  `,
  styles: [
  ]
})
export class EventBindComponent  {
  str:string="";
  
  MarvellousEvent()
  {
    console.log("Button Pressed");
  }
  MarvellousNewEvent()
  {
    this.str="Button Clicked";
  }
  MarvellousEventInfo(event:any)
  {
    console.log(event);
  }

  

}
