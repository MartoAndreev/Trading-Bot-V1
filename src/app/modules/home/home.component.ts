import { CurrencyPipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, Subscription, take, timeout } from 'rxjs';
import { AppService } from 'src/app/providers/app.service';
import { createTransactionRequest, getSingleCryptoPrice, loadBinanceCrypto } from '../app/store/app.actions';
import { IAppState } from '../app/store/app.reducer';
import { AppState, selectAllBinanceCrypto, selectAllInfo, selectEmail, selectSavedCryptos } from '../app/store/app.selectors';
import { ListRequestRes, BotRequest2 } from '../app/store/interfaces';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  public email: string = "";
  public email$ = this.store.select(selectEmail);
  private subscription = new Subscription();
  public binanceCryptos$ = this.store.select(selectAllBinanceCrypto);
  public savedCryptos$ = this.store.select(selectSavedCryptos);
  public selectAllInfo$ = this.store.select(selectAllInfo);
  public loading: boolean = false;

  public firstTenCryptos: Array<ListRequestRes> = [];
  public test: Array<BotRequest2> = [];

  constructor(

    private appService: AppService,
    public router: Router,
    public store: Store<AppState>
  ) {
    // this.test$ = store.select(test);
    // while(1) {
    // }
    // 
    this.email$.pipe().subscribe((email) => {
      this.email = email;
    })
    this.store.dispatch(loadBinanceCrypto());


    // this.subscription.add(this.store.pipe(select(selectAllBinanceCrypto)).subscribe(res => {
    //   let test = res;


    // }))
    this.getTable();
  }


  getTable() {

    this.loading = true;
    this.binanceCryptos$.pipe().subscribe((cryptos) => {
      console.log(cryptos);
      // if (cryptos) {
      //   this.firstTenCryptos = [];
      //   for (let i = 0; i <= 9; i++) {
      //     this.firstTenCryptos.push(cryptos[i]);
      //   }
      // }
      this.firstTenCryptos = [];

      cryptos?.map((value) => {

        if (value.fullName == 'Ethereum' || value.fullName == 'Bitcoin' || value.fullName == 'Ripple' || value.fullName == 'BNB' || value.fullName == '1inch' || value.fullName == 'Dogecoin' || value.fullName == 'SHIBA INU' || value.fullName == 'USD Coin' || value.fullName == 'BUSD' || value.fullName == 'Enjin Coin') {

          if (value.mapperName) {
            this.store.dispatch(createTransactionRequest({
              params: {
                user: this.email,
                currency: value.fullName,
                price: value.price,
                action: value ? "BUY" : "SELL",
              }
            }))
            this.firstTenCryptos.push(value);
            // this.store.dispatch(getSingleCryptoPrice({ params: value.mapperName }));
          }
        }
      })
      this.loading = false
    });
    this.savedCryptos$.pipe().subscribe((crypto) => {
    });
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



// Bitcoin
// Crypto
// Etherium
// BNB
// 1Inch
// Dogecoin
// ShibaInu
// USDC
// BUSD
// ENJ