import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { AppService } from "src/app/providers/app.service";
import { AppActions, AppGetActionsUnion, getSingleCryptoPriceFailure, getSingleCryptoPriceSuccess, loadBinanceCryptoFailure, loadBinanceCryptoSuccess } from "./app.actions";

@Injectable()

export class AppEffects {

    public loadBinanceCrypto$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AppActions.LOAD_BINANCE_CRYPTO),
            switchMap(() => {
                return this.appSurvice.getAllCriptos().pipe(
                    map((crypto) => {
                        return loadBinanceCryptoSuccess({ params: crypto.data });
                    },
                        catchError((err) => {
                            return of(loadBinanceCryptoFailure());
                        })
                    )

                )
            })
        )
    })

    public getSingleCryptoPrice$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AppActions.GET_SINGLE_CRYPTO_PRICE),
            switchMap((action) => {
                return this.appSurvice.getSingleCryptoPriceRequest(action.params).pipe(
                    map((res) => {
                        return getSingleCryptoPriceSuccess({ params: res });
                    },
                        catchError((err) => {
                            return of(getSingleCryptoPriceFailure());
                        })
                    )

                )
            })
        )
    })


    constructor(
        private actions$: Actions<AppGetActionsUnion>,
        private appSurvice: AppService,
    ) { }
}