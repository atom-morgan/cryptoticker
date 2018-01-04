import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

/*
  Generated class for the CoinmarketProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CoinmarketProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CoinmarketProvider Provider');
  }

  get(): Observable<any> {
    return this.http.get('https://api.coinmarketcap.com/v1/ticker/').map(res => this.sortByPrice(res));
  }

  sortByPrice(currencies) {
    return currencies.sort((a, b) => {
      return b.price_usd - a.price_usd;
    });
  }

}
