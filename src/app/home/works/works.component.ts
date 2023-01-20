import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  maintitle='How it Works.';  
  @Input() work:any =[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
