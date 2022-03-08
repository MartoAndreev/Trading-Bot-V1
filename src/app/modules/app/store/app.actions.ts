import { createAction, props, union } from "@ngrx/store";

export enum AppActions {
    LOAD_BINANCE_CRYPTO = "[App] Load Binance Crypto",
    LOAD_BINANCE_CRYPTO_SUCCESS = "[App] Load Binance Crypto Success",
    LOAD_BINANCE_CRYPTO_FAILURE = "[App] Load Binance Crypto Failure",

}

export const loadBinanceCrypto = createAction(AppActions.LOAD_BINANCE_CRYPTO);
export const loadBinanceCryptoSuccess = createAction(AppActions.LOAD_BINANCE_CRYPTO_SUCCESS, props<{ allBinanceCrypto: any }>());
export const loadBinanceCryptoFailure = createAction(AppActions.LOAD_BINANCE_CRYPTO_FAILURE);

const all = union({
    loadBinanceCrypto,
    loadBinanceCryptoSuccess,
    loadBinanceCryptoFailure,
});

export type AppGetActionsUnion = typeof all;