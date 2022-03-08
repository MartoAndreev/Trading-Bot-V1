import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { AppService } from "src/app/providers/app.service";
import { AppActions, AppGetActionsUnion, loadBinanceCryptoFailure, loadBinanceCryptoSuccess } from "./app.actions";

@Injectable()

export class AppEffects {

    public loadBinanceCrypto$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AppActions.LOAD_BINANCE_CRYPTO),
            switchMap(() => {
                return this.appSurvice.getAllCriptos().pipe(
                    map((crypto) => {
                        console.log(crypto);

                        return loadBinanceCryptoSuccess({ allBinanceCrypto: crypto });
                    },
                        catchError((err) => {
                            return of(loadBinanceCryptoFailure());
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