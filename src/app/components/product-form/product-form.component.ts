// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../services/serv/product.service';
import { StateService } from '../../services/serv/state.service';

// @Component({
//   selector: 'app-product-form',
//   standalone: true,
//   imports: [],
//   templateUrl: './product-form.component.html',
//   styleUrl: './product-form.component.css'
// })

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Add Product</h2>
    <form (ngSubmit)="save()">
      <input [(ngModel)]="name" name="name" placeholder="Name" required />
      <input type="number" [(ngModel)]="price" name="price" placeholder="Price" required />
      <button type="submit">Save</button>
    </form>
  `
})   
export class ProductFormComponent {
    name = '';
    price = 0;


    constructor(
    private service: ProductService,
    private state: StateService,
    private router: Router
  ) {}

  save() {
    this.service.add({ name: this.name, price: this.price }).subscribe(() => {
      this.service.getAll().subscribe(data => {
        this.state.update(data);
        this.router.navigate(['/products']);
      });
    });
  }
}
