import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { AppService } from "src/app/providers/app.service";
import { getByUserRequest, removeBotTrade } from "../app/store/app.actions";
import { AppState, selectAllBinanceCrypto, selectAllInfo, selectBotTable, selectEmail, selectSavedCryptos } from "../app/store/app.selectors";
import { BotRequest2, BotTable, ListRequestRes } from "../app/store/interfaces";



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'H', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'H', weight: 4.0026, symbol: 'H' },
//   { position: 3, name: 'L', weight: 6.941, symbol: 'L' },
//   { position: 4, name: 'B', weight: 9.0122, symbol: 'B' },
//   { position: 5, name: 'B', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'C', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'N', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'O', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'F', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'N', weight: 20.1797, symbol: 'N' },
// ];

@Component({
  selector: 'bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent {
  
  public botTable: Array<BotTable> = [];
  public email: string = "";
  public email$ = this.store.select(selectEmail);
  private subscription = new Subscription();
  public binanceCryptos$ = this.store.select(selectAllBinanceCrypto);
  public savedCryptos$ = this.store.select(selectSavedCryptos);
  public selectAllInfo$ = this.store.select(selectAllInfo);
  public selectBotTable$ = this.store.select(selectBotTable);
  public loading: boolean = false;
  public firstTenCryptos: Array<ListRequestRes> = [];
  public test: Array<BotRequest2> = [];
  
  constructor(
    private appService: AppService,
    public router: Router,
    public store: Store<AppState>
    
    ) {
      this.selectBotTable$.pipe().subscribe((botTable) => {
        if (!botTable) {
          return;
        }
        this.botTable = [...botTable];
        
        console.log(botTable);
        
      })
      
      this.email$.pipe().subscribe((email) => {
        this.email = email;
        this.store.dispatch(getByUserRequest({
          params: this.email
      }));
    })
    
    
    // this.subscription.add(this.store.pipe(select(selectAllBinanceCrypto)).subscribe(res => {
      //   let test = res;
      
      
      // }))
      this.getTable();
    }
    getTable() {
      
      this.firstTenCryptos = [];
      this.loading = true;
      this.selectAllInfo$.pipe().subscribe((cryptos) => {
        console.log(cryptos);
        cryptos?.map((value) => {
          
          if (value.action) {
            this.firstTenCryptos.push(value);
            // this.store.dispatch(getSingleCryptoPrice({ params: value.mapperName }));
          }
        });
      });
    }
    sliceNumber9(eprice: string) {
      return eprice.slice(0, 9);
    }
  
    delite(id?: string) {
      if(id){     
        this.store.dispatch(removeBotTrade({ params: id }))
      }
    }
  }
  
  //   public binanceCryptos$ = this.store.select(selectAllInfo);
  //   public savedCryptos$ = this.store.select(selectAllInfo);
  //   public loading: boolean = false;
  //   public test: BotRequest2 = {};
  
//   constructor(
//     private appService: AppService,
//     public router: Router,
//     public store: Store<AppState>
//     ) {
//       this.test.user = "user", this.test.currency = "curr", this.test.price = 0, this.test.action = "action"
//       this.store.dispatch(createTransactionRequest({params: this.test}));
//       this.getTable();
//   }

//   getTable() {

//     this.loading = true;
//     this.binanceCryptos$.pipe().subscribe((cryptos) => {
//       console.log(cryptos);
//       // if (cryptos) {
//       //   this.firstTenCryptos = [];
//       //   for (let i = 0; i <= 9; i++) {
//       //     this.firstTenCryptos.push(cryptos[i]);
//       //   }
//       // }
//       // this.firstTenCryptos = [];

//       // cryptos?.map((value) => {

//       //   if (value.fullName == 'Ethereum' || value.fullName == 'Bitcoin' || value.fullName == 'Ripple' || value.fullName == 'BNB' || value.fullName == '1inch' || value.fullName == 'Dogecoin' || value.fullName == 'SHIBA INU' || value.fullName == 'USD Coin' || value.fullName == 'BUSD' || value.fullName == 'Enjin Coin') {

//       //     if (value.mapperName) {
//       //       this.firstTenCryptos.push(value);
//       //       // this.store.dispatch(getSingleCryptoPrice({ params: value.mapperName }));
//       //     }
//       //   }
//       // })
//       this.loading = false
//     });
//     this.savedCryptos$.pipe().subscribe((crypto) => {
//     });
//   }
// }

