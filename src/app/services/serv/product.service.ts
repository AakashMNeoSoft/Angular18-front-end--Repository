import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Product {
  id?: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   private apiUrl = 'https://your-backend-url/api/products'; // Change this

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  add(product: Product) {
    return this.http.post(this.apiUrl, product);
  }
}
