import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  banner1 = [
    {
      title: 'Beautiful food & takeaway, delivered to your door.',
      subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500.',
      btntitle: 'Place an Order',
      img: 'assets/banner1.png',
      color: '',
      backimage: 'assets/home1.svg'
    },
  ];

  banner2 = [
    {
      title: 'The home of fresh products',
      subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500.',
      btntitle: 'Learn About Us',
      img: 'assets/banner2.png',
      color: 'rgb(13 202 240 / 9%)',
      backimage: ''

    }
  ];
  banner3 = [
    {
      title: 'Call our store and takeaway when it suits you best.',
      subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500.',
      btntitle: 'Call Us',
      img: 'assets/banner3.png',
      color: '',
      backimage: ''

    }
  ];

  work = [
    {
      title: 'Adapt your menu items',
      subtitle: 'Easily adapt your menu using the webflow CMS and allow customers to browse your items.',
      image: 'assets/work1.png'
    },
    {
      title: 'Accept online orders & takeout',
      subtitle: 'Let your customers order and pay via the powerful ecommerce system, or simple let them call your store.',
      image: 'assets/work2.png'
    },
    {
      title: 'Manage delivery or takeout',
      subtitle: 'Manage your own logistics and take orders simply through the ecommerce system.',
      image: 'assets/work3.png'
    }
  ];

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
  prodcatcolor = 'rgba(13, 202, 240, 0.09)';
  constructor() { }

  ngOnInit(): void {
  }

}
