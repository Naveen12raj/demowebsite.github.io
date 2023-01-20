import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menu =[
    {name:'Home',link:'./'},
    {name:'Order',link:'order'},
    {name:'Company',link:'company'},
    {name:'FAQ',link:'faq'},
    {name:'Contact',link:'contact'},
  ];
  public innerWidth: any;
  dropdown =false;
  constructor() {

  }
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth > 900) {
       this.dropdown = true;
    } else {
       this.dropdown = false;
    }
  }
  shownav(){
    this.dropdown= !this.dropdown;
  }
}
