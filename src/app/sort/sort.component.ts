import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../Interfaces/product';

@Component({
  selector: 'app-sort',
  imports: [],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.scss'
})
export class SortComponent {
  @Output()
  sortChange = new EventEmitter<Product>();
  

  changeSort(){
    console.log('Wybrałam sortowanie-dziecko');
    this.sortChange.emit(
      {
        id: 8,
        name: 'mars',
        size: 450
      }
    )
  }
}
