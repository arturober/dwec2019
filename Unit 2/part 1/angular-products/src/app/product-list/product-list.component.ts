import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/i-product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'My product\'s list';
  headers = {
    image: 'Image',
    description: 'Product',
    price: 'Price',
    available: 'Available'
  };
  colors = ['red', 'green', 'blue', 'yellow'];
  color = 0;
  showImage = true;
  filterSearch = '';

  products: IProduct[] = [
    {
      id: 1,
      description: 'SSD hard drive',
      available: new Date('2016-10-03'),
      price: 75,
      imageUrl: 'assets/ssd.jpg',
      rating: 5
    },
    {
      id: 2,
      description: 'LGA1151 Motherboard',
      available: new Date('2016-09-15'),
      price: 96.95,
      imageUrl: 'assets/motherboard.jpg',
      rating: 4
    },
    {
      id: 2,
      description: '2TB hard drive',
      available: new Date('2018-12-01'),
      price: 75.95,
      imageUrl: 'assets/hdd.jpg',
      rating: 3
    }
  ];

  constructor() {}

  ngOnInit() {}

  changeColor() {
    this.color = Math.floor(Math.random() * 4);
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
