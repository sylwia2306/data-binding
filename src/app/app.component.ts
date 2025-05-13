import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhotoGalleryComponent } from "./photo-gallery/photo-gallery.component";
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "./button/button.component";
import { ProductListComponent } from "./product-list/product-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PhotoGalleryComponent, CommonModule, ButtonComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'data-binding';
}
