import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  filterString: string = 'food';

  @Input() question:any = [];
  @Input() prodcate: any = [];

  
  toggle=true;
  quesno=0;
  toggleit(value:any) {
    this.toggle = !this.toggle;
    this.quesno = value;
    console.log(this.quesno);
    console.log(this.toggle);
  }
  curentindex =0;
  change(value:string) {
    console.log(value);
    this.filterString = value;
    console.log('curr',this.curentindex);
  }
  constructor() { }
  ngOnInit(): void {
  }

}
