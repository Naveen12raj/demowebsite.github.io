import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  heading='Get your food delivered, or pick-up in store.';

  product = [
    {
      prodcate: 'burger',
      prodname: 'Burger Dreams',
      proddiscp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      prodimage: 'assets/Burger1.png'
    },
    {
      prodcate: 'burger',
      prodname: 'Burger Waldo',
      proddiscp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      prodimage: 'assets/Burger2.png'
    },
    {
      prodcate: 'burger',
      prodname: 'Burger Cali',
      proddiscp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      prodimage: 'assets/Burger3.png'
    },
    {
      prodcate: 'burger',
      prodname: 'Burger Bacon Buddy',
      proddiscp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      prodimage: 'assets/Burger4.png'
    },
    {
      prodcate: 'burger',
      prodname: 'Burger Spicy',
      proddiscp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      prodimage: 'assets/Burger5.png'
    },
    {
      prodcate: 'burger',
      prodname: 'Burger Classic',
      proddiscp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      prodimage: 'assets/Burger6.png'
    },
    {
      prodcate: 'salad',
      prodname: 'Salad Ceaser',
      proddiscp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      prodimage: 'assets/Side1.png'
    },
    {
      prodcate: 'salad',
      prodname: 'Beans Slow Cooked',
      proddiscp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      prodimage: 'assets/Side2.png'
    },
    {
      prodcate: 'salad',
      prodname: 'Fries Cheese',
      proddiscp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      prodimage: 'assets/Side3.png'
    },
    {
      prodcate: 'salad',
      prodname: 'Fries Rustic',
      proddiscp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      prodimage: 'assets/Side4.png'
    },
  ];
  prodcat = [
    {
      category:'burger',
    },
    {
      category:'salad',      
    },
   
  ];
  prodcatcolor = '';
  constructor() { }

  ngOnInit(): void {
  }

}
