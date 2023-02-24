import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IFood } from '../IFood';
import { FormBuilder } from '@angular/forms';
import { food } from '../food';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items: IFood[] = [];
  checkoutForm = this.fb.group({
    name: '',
    address: '',
    email: '',
  });
  discount = 0;
  productsPrice = 0;
  servicePrice = 0;
  totalPrice = 0;

  constructor(private cartService: CartService, private fb: FormBuilder) {}

  clearCart() {
    window.alert('Your cart has been cleared');
    this.items = this.cartService.clearCart();
  }

  onSubmit() {
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.calculateProductsPrice();
    this.calculateService();
    this.calculateDiscount();
    this.calculateTotalPrice();
  }

  calculateProductsPrice() {
    this.items.forEach((item) => {
      item.price;
      this.productsPrice = this.productsPrice + item.price;
    });
  }

  calculateService() {
    this.servicePrice = this.productsPrice / 10;
  }

  calculateDiscount() {
    if (this.productsPrice > 40) {
      this.discount = (this.productsPrice / 100) * 15;
    }
  }

  calculateTotalPrice() {
    this.totalPrice = this.productsPrice + this.servicePrice - this.discount;
    this.totalPrice = this.totalPrice + this.totalPrice * 0.1;
  }
}
