import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CartService } from '../cart.service';
import { food } from '../food';
import { IFood } from '../IFood';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  food: IFood = {} as IFood;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart() {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(this.food);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['foodId'];
      this.food = food[this.id];
    });
  }
}
