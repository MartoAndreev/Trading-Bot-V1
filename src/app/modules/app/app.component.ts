import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { AppService } from "src/app/providers/app.service";
import { loadBinanceCrypto } from "./store/app.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Trading-Bot-V1';
  private subscription = new Subscription();
  constructor(
    private appService: AppService,
    public router: Router,
    public store: Store
  ) { }

  // async getFromBinance() {
  //   // const response = await fetch('https://www.binance.com/bapi/asset/v1/public/asset-service/product/currency');

  //   // console.log(await fetch('https://www.binance.com/bapi/asset/v1/public/asset-service/product/currency');
  //   let res = await this.appService.getAllCriptos()
  //   console.log(res);

  //   // for(let item of res.data) {

  // }
  ngOnInit() {
    // this.store.dispatch(fromActions.loadProducts());
    this.loadProducts();
  }
  loadProducts() {

    this.store.dispatch(loadBinanceCrypto());
    this.subscription.add(this.store.pipe(select(loadBinanceCrypto)).subscribe(res => {
      let test = res;
      console.log(test);
      

    }))
    // const productsObserver = {
    //   next: products => {
    //     this.store.dispatch(fromActions.loadProductsSuccess({ products: products }));

    //     this.products = products;
    //   },
    //   error: err => {
    //     this.store.dispatch(fromActions.loadProductsFailure({ error: err }));
    //     console.error(err);
    //   }


    // };
    // this.appService.getProducts().subscribe(productsObserver);
  }
}


