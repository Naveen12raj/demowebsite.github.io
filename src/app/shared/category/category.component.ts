import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  filterString: string = 'burger';
  count=0;
  @Input() product: any = [];
  @Input() prodcat: any = [];
  @Input() prodcatcolor:any ='';
  curentindex =0;
  change(value:string) {
    console.log(value);
    this.filterString = value;
    console.log(this.count);
    console.log(this.curentindex);
  }
  constructor() { }
  ngOnInit(): void {
  }
}
