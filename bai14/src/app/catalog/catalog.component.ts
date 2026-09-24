import { Component } from '@angular/core';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  standalone: false,
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  categories: any[];
  constructor(private catalogService: CatalogService) {
    this.categories = this.catalogService.getCategories();
  }
}
