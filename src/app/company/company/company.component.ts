import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  heading='Our company focuses on food and people.';
  banner1 = [
    {
      title: 'The home of fresh products',
      subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500.',
      btntitle: 'Learn About Us',
      img: 'assets/banner4.png',
      color: '',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
