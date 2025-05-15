import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private productsSubject = new BehaviorSubject<Product[]>([]);
  public products$ = this.productsSubject.asObservable();

  update(products: Product[]) {
    this.productsSubject.next(products);
  }
}