import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CoinmarketProvider } from '../../providers/coinmarket/coinmarket';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  currencies: Array<any>;

  constructor(public navCtrl: NavController, private coinMarket: CoinmarketProvider) {}

  ngOnInit() {
    this.coinMarket.get().subscribe(res => this.currencies = res);
  }

  currencySelected(id) {
    console.log('currency ' + id + ' selected');
  }

}
