import { Component } from '@angular/core';
import { Product } from '../Interfaces/product';
import { CommonModule } from '@angular/common';
import { SortComponent } from "../sort/sort.component";

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, SortComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: Product[] = [{
    id: 1,
    name: 'milk',
    size: 100
  }, {
    id: 2,
    name: 'melon',
    size: 2
  }, {
    id: 3,
    name: 'sneakers',
    size: 450
  }
  ]

  sortProducts(option: Product) {
    console.log('Zmieniam sortowanie produktów-rodzic');
    console.log(option);
  }

}
