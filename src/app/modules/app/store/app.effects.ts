import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { AppService } from "src/app/providers/app.service";
import { AppActions, AppGetActionsUnion, createUserCurrencyFailure, createUserCurrencySuccess, getSingleCryptoPriceFailure, getSingleCryptoPriceSuccess, getUserCurrencyFailure, getUserCurrencySuccess, loadBinanceCryptoFailure, loadBinanceCryptoSuccess, loginFailure, loginSuccess } from "./app.actions";

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

    public login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AppActions.LOGIN),
            switchMap((action) => {
                console.log(action);

                return this.appSurvice.loginRequest(action.params).pipe(
                    map((res) => {
                        console.log(res);

                        return loginSuccess({ params: action.params });
                    },
                        catchError((err) => {
                            return of(loginFailure());
                        })
                    )

                )
            })
        )
    })

    public createUserCurrencyRequest$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AppActions.CREATE_USER_CURRENCY),
            switchMap((action) => {
                console.log(action);

                return this.appSurvice.createUserCurrencyRequest(action.params).pipe(
                    map((res) => {
                        console.log(res);

                        return getUserCurrencySuccess({ params: action.params });
                    },
                        catchError((err) => {
                            return of(createUserCurrencyFailure());
                        })
                    )

                )
            })
        )
    })

    public getUserCurrencyRequest$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AppActions.GET_USER_CURRENCY),
            switchMap((action) => {
                console.log(action);

                return this.appSurvice.getUserCurrencyRequest(action.params).pipe(
                    map((res) => {
                        console.log(res);

                        return getUserCurrencySuccess({ params: action.params });
                    },
                        catchError((err) => {
                            return of(getUserCurrencyFailure());
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