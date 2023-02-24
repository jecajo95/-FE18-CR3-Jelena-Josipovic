import { Injectable } from '@angular/core';
import { IFood } from './IFood';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: IFood[] = [];

  constructor() {}

  addToCart(food: IFood) {
    this.items.push(food);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getLength() {
    return this.items.length;
  }
}
