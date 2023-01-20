import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  image = 'assets/counterbanner.jpg';
  constructor() { }
  counter =[
    {
      value:'65',
      title:'Fiesy Menu Item'
    },
    {
      value:'165',
      title:'Fiesy Menu Item'
    },
    {
      value:'32',
      title:'Fiesy Menu Item'
    },
    {
      value:'87',
      title:'Fiesy Menu Item'
    },
  ];
  ngOnInit(): void {
  }

}
