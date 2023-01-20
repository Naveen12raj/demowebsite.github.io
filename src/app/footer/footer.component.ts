import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  menu = [
    { name: 'Home', link: './' },
    { name: 'Order', link: 'order' },
    { name: 'Company', link: 'company' },
    { name: 'FAQ', link: 'faq' },
    { name: 'Contact', link: 'contact' },
  ];
   
  msg='Takeaway & Delivery template for small - medium businesses.';
  footer = [
    {mono:'Why Choose us'},
    {mono:'Our History'},
    {mono:'Work With Us'},
  ]

  ngOnInit(): void {
  }

}
