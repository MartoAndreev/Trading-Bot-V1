import { createAction, props, union } from "@ngrx/store";
import { ListRequestRes } from "./interfaces";

export enum AppActions {
    LOAD_BINANCE_CRYPTO = "[App] Load Binance Crypto",
    LOAD_BINANCE_CRYPTO_SUCCESS = "[App] Load Binance Crypto Success",
    LOAD_BINANCE_CRYPTO_FAILURE = "[App] Load Binance Crypto Failure",

    GET_SINGLE_CRYPTO_PRICE = "[App] Get Single Crypto Price",
    GET_SINGLE_CRYPTO_PRICE_SUCCESS = "[App] Get Single Crypto Price Success",
    GET_SINGLE_CRYPTO_PRICE_FAILURE = "[App] Get Single Crypto Price Failure",

}

export const loadBinanceCrypto = createAction(AppActions.LOAD_BINANCE_CRYPTO);
export const loadBinanceCryptoSuccess = createAction(AppActions.LOAD_BINANCE_CRYPTO_SUCCESS, props<{ params: Array<ListRequestRes> }>());
export const loadBinanceCryptoFailure = createAction(AppActions.LOAD_BINANCE_CRYPTO_FAILURE);

export const getSingleCryptoPrice = createAction(AppActions.GET_SINGLE_CRYPTO_PRICE, props<{ params: string }>());
export const getSingleCryptoPriceSuccess = createAction(AppActions.GET_SINGLE_CRYPTO_PRICE_SUCCESS, props<{ params: any }>());
export const getSingleCryptoPriceFailure = createAction(AppActions.GET_SINGLE_CRYPTO_PRICE_FAILURE);


const all = union({
    loadBinanceCrypto,
    loadBinanceCryptoSuccess,
    loadBinanceCryptoFailure,

    getSingleCryptoPrice,
    getSingleCryptoPriceSuccess,
    getSingleCryptoPriceFailure,
});

export type AppGetActionsUnion = typeof all;


//  getSingleCryptoPrice