import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  Products = [{'name':'Phone XL',
              'description':'A large phone with onr of the best screens',
              'price':1200},
              {'name':'Phone Mini',
              'description':'A large phone with onr of the best cameras',
              'price':800},
              {'name':'Phone standerd',
              'description':'A large phone with onr of the best value and performance',
              'price':500},
            ]
  ngOnInit(): void {
  }

}
