import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  text: string = 'Benvenuto al Ristorante Il Gambero Rosso';
  btnText: string = 'Menu';
  btnUrl: string = '/menu';

  constructor() {}

  ngOnInit(): void {}
}
