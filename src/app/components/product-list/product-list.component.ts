import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateService } from '../../services/serv/state.service';
import { ProductService } from '../../services/serv/product.service';
import { Product } from '../../services/serv/product.service';


// ../../services/serv/auth.service
// @Component({
//   selector: 'app-product-list',
//   standalone: true,
//   imports: [],
//   templateUrl: './product-list.component.html',
//   styleUrl: './product-list.component.css'
// })

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Product List</h2>
    <ul *ngIf="products.length > 0; else noData">
      <li *ngFor="let product of products">
        {{ product.name }} - ₹{{ product.price }}
      </li>
    </ul>
    <ng-template #noData>
      <p>No products found.</p>
    </ng-template>
  `
})
// export class ProductListComponent {

export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private state: StateService, private service: ProductService) { }

  ngOnInit() {
    this.service.getAll().subscribe(data => this.state.update(data));
    this.state.products$.subscribe(p => this.products = p);
  }
}
