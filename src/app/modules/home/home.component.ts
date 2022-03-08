import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/providers/app.service';
import { loadBinanceCrypto } from '../app/store/app.actions';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private subscription = new Subscription();
  public priceList: Array<PriceCard> = [
    {
      name: "Bitcoin",
      tag: "BTC",
      price: 48800.00,
      percentage: 15.00,
      overallPrice: 999999999999.00
    },
    {
      name: "Ethereum",
      tag: "ETH",
      price: 40099.00,
      percentage: 0.20,
      overallPrice: 100099999999.00
    },
    {
      name: "Cardano",
      tag: "ADA",
      price: 1.50,
      percentage: 100.00,
      overallPrice: 9999.00
    },
    {
      name: "Dogecoin",
      tag: "DOGE",
      price: 48800.00,
      percentage: 15.00,
      overallPrice: 12345678954.00
    },
    {
      name: "Polkadot",
      tag: "DOT",
      price: 26.97,
      percentage: 7.65,
      overallPrice: 255033339829.00
    },
  ]
  constructor(
    private appService: AppService,
    public router: Router,
    public store: Store
  ){
    this.store.dispatch(loadBinanceCrypto());
    this.subscription.add(this.store.pipe(select(loadBinanceCrypto)).subscribe(res => {
      let test = res;
      console.log(test);
      

    }))
  }
}
export interface PriceCard {
  name?: string,
  tag?: string,
  price?: number,
  percentage?: number,
  overallPrice?: number,
  graf?: any
}
