import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { AppService } from "src/app/providers/app.service";
import { AppActions, AppGetActionsUnion, createTransactionRequestFailure, createTransactionRequestSuccess, createUserCurrencyFailure, createUserCurrencySuccess, getByCurrencyRequestFailure, getByCurrencyRequestSuccess, getByUserRequestFailure, getByUserRequestSuccess, getSingleCryptoPriceFailure, getSingleCryptoPriceSuccess, getUserCurrencyFailure, getUserCurrencySuccess, loadBinanceCryptoFailure, loadBinanceCryptoSuccess, loginFailure, loginSuccess, removeBotTradeFailure, removeBotTradeSuccess, signupFailure, signupSuccess } from "./app.actions";

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

    public signup$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AppActions.SIGNUP),
            switchMap((action) => {
                console.log(action);

                return this.appSurvice.signupRequest(action.params).pipe(
                    map((res) => {
                        console.log(res);

                        return signupSuccess({ params: action.params });
                    },
                        catchError((err) => {
                            return of(signupFailure());
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
    
    public createTransactionRequest$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AppActions.CREATE_TRANSACTION_REQUEST),
            switchMap((action) => {
                console.log(action);

                return this.appSurvice.createTransactionRequest(action.params).pipe(
                    map((res) => {
                        console.log(res);

                        return createTransactionRequestSuccess({ params: action.params });
                    },
                        catchError((err) => {
                            return of(createTransactionRequestFailure());
                        })
                    )

                )
            })
        )
    })

    public getByCurrencyRequest$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AppActions.GET_BY_CURRENCY_REQUEST),
            switchMap((action) => {
                console.log(action);

                return this.appSurvice.getByCurrencyRequest(action.params).pipe(
                    map((res) => {
                        console.log(res);

                        return getByCurrencyRequestSuccess({ params: action.params });
                    },
                        catchError((err) => {
                            return of(getByCurrencyRequestFailure());
                        })
                    )

                )
            })
        )
    })

    public getByUserRequest$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AppActions.GET_BY_USER_REQUEST),
            switchMap((action) => {
                console.log(action);

                return this.appSurvice.getByUserRequest(action.params).pipe(
                    map((res) => {
                        console.log(res);
                        console.log("text");
                        

                        return getByUserRequestSuccess({ params: res });
                    },
                        catchError((err) => {
                            console.log("error");
                            
                            return of(getByUserRequestFailure());
                        })
                    )

                )
            })
        )
    })

    public removeBotTrade$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AppActions.REMOVE_BOT_TRADE),
            switchMap((action) => {
                console.log(action);

                return this.appSurvice.removeBotTradee(action.params).pipe(
                    map((delite) => {
                        

                        return removeBotTradeSuccess();
                    },
                        catchError((err) => {
                            console.log("error");
                            
                            return of(removeBotTradeFailure());
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