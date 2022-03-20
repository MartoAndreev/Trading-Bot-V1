import { createAction, props, union } from "@ngrx/store";
import { ListRequestRes, LoginRequest } from "./interfaces";

export enum AppActions {
    LOAD_BINANCE_CRYPTO = "[App] Load Binance Crypto",
    LOAD_BINANCE_CRYPTO_SUCCESS = "[App] Load Binance Crypto Success",
    LOAD_BINANCE_CRYPTO_FAILURE = "[App] Load Binance Crypto Failure",

    GET_SINGLE_CRYPTO_PRICE = "[App] Get Single Crypto Price",
    GET_SINGLE_CRYPTO_PRICE_SUCCESS = "[App] Get Single Crypto Price Success",
    GET_SINGLE_CRYPTO_PRICE_FAILURE = "[App] Get Single Crypto Price Failure",

    LOGIN = "[User] Login",
    LOGIN_SUCCESS = "[User] Login Success",
    LOGIN_FAILURE = "[User] Login Failure"
}

export const loadBinanceCrypto = createAction(AppActions.LOAD_BINANCE_CRYPTO);
export const loadBinanceCryptoSuccess = createAction(AppActions.LOAD_BINANCE_CRYPTO_SUCCESS, props<{ params: Array<ListRequestRes> }>());
export const loadBinanceCryptoFailure = createAction(AppActions.LOAD_BINANCE_CRYPTO_FAILURE);

export const getSingleCryptoPrice = createAction(AppActions.GET_SINGLE_CRYPTO_PRICE, props<{ params: string }>());
export const getSingleCryptoPriceSuccess = createAction(AppActions.GET_SINGLE_CRYPTO_PRICE_SUCCESS, props<{ params: any }>());
export const getSingleCryptoPriceFailure = createAction(AppActions.GET_SINGLE_CRYPTO_PRICE_FAILURE);

export const login = createAction(AppActions.LOGIN, props<{ params: LoginRequest }>());
export const loginSuccess = createAction(AppActions.LOGIN_SUCCESS, props<{ params: number }>());
export const loginFailure = createAction(AppActions.LOGIN_FAILURE);


const all = union({
    loadBinanceCrypto,
    loadBinanceCryptoSuccess,
    loadBinanceCryptoFailure,

    getSingleCryptoPrice,
    getSingleCryptoPriceSuccess,
    getSingleCryptoPriceFailure,

    login,
    loginSuccess,
    loginFailure,
});

export type AppGetActionsUnion = typeof all;