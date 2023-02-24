import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CartService } from '../cart.service';
import { food } from '../food';
import { IFood } from '../IFood';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  foods: IFood[] = food;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart(food: IFood) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(food);
  }

  ngOnInit(): void {}
}
