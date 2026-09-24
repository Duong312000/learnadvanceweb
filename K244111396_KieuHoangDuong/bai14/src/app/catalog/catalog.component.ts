import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-catalog',
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  categories: any[];
  constructor(private catalogService: CatalogService) {
    this.categories = this.catalogService.getCategories();
  }
}
