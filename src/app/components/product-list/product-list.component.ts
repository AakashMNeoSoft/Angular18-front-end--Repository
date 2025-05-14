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
    <a routerLink="/add-product">Add Product</a>
    <ul>
      <li *ngFor="let p of products">
        {{ p.name }} - ₹{{ p.price }}
      </li>
    </ul>
  `
})
// export class ProductListComponent {

export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private state: StateService, private service: ProductService) {}

  ngOnInit() {
    this.service.getAll().subscribe(data => this.state.update(data));
    this.state.products$.subscribe(p => this.products = p);
  }
}
