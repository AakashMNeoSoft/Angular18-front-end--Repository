import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id?: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://localhost:7020/api/Product'; // Change this

  constructor(private http: HttpClient) { }

  // getAll() {
  //   return this.http.get<Product[]>(this.apiUrl);
  // }

  // add(product: Product) {
  //   return this.http.post(this.apiUrl, product);
  // }
  getAll(): Observable<Product[]> {
    debugger;
    return this.http.get<Product[]>(`${this.apiUrl}/GetAll`);
  }

  getById(id: number): Observable<Product> {
    debugger;
    return this.http.get<Product>(`${this.apiUrl}/GetbyID${id}`);
  }

  add(product: Product): Observable<Product> {
    debugger;
    return this.http.post<Product>(`${this.apiUrl}/AddProduct`, product);
  }

  update(id: number, product: Product): Observable<any> {
    return this.http.put(`${this.apiUrl}/UpdateProduct${id}`, product);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/DeleteProduct${id}`);
  }
}
