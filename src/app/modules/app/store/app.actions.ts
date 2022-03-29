import { createAction, props, union } from "@ngrx/store";
import { CreateUserCurrencyRequest, ListRequestRes, LoginRequest } from "./interfaces";

export enum AppActions {
    LOAD_BINANCE_CRYPTO = "[App] Load Binance Crypto",
    LOAD_BINANCE_CRYPTO_SUCCESS = "[App] Load Binance Crypto Success",
    LOAD_BINANCE_CRYPTO_FAILURE = "[App] Load Binance Crypto Failure",

    GET_SINGLE_CRYPTO_PRICE = "[App] Get Single Crypto Price",
    GET_SINGLE_CRYPTO_PRICE_SUCCESS = "[App] Get Single Crypto Price Success",
    GET_SINGLE_CRYPTO_PRICE_FAILURE = "[App] Get Single Crypto Price Failure",

    LOGIN = "[User] Login",
    LOGIN_SUCCESS = "[User] Login Success",
    LOGIN_FAILURE = "[User] Login Failure",

    CREATE_USER_CURRENCY = "[User] Create User Currency",
    CREATE_USER_CURRENCY_SUCCES = "[User] Create User Currency Success",
    CREATE_USER_CURRENCY_FAILURE = "[User] Create User Currency Failure",

    GET_USER_CURRENCY = "[User] Get User Currency",
    GET_USER_CURRENCY_SUCCES = "[User] Get User Currency Success",
    GET_USER_CURRENCY_FAILURE = "[User] Get User Currency Failure"
}

export const loadBinanceCrypto = createAction(AppActions.LOAD_BINANCE_CRYPTO);
export const loadBinanceCryptoSuccess = createAction(AppActions.LOAD_BINANCE_CRYPTO_SUCCESS, props<{ params: Array<ListRequestRes> }>());
export const loadBinanceCryptoFailure = createAction(AppActions.LOAD_BINANCE_CRYPTO_FAILURE);

export const getSingleCryptoPrice = createAction(AppActions.GET_SINGLE_CRYPTO_PRICE, props<{ params: string }>());
export const getSingleCryptoPriceSuccess = createAction(AppActions.GET_SINGLE_CRYPTO_PRICE_SUCCESS, props<{ params: any }>());
export const getSingleCryptoPriceFailure = createAction(AppActions.GET_SINGLE_CRYPTO_PRICE_FAILURE);

export const login = createAction(AppActions.LOGIN, props<{ params: LoginRequest }>());
export const loginSuccess = createAction(AppActions.LOGIN_SUCCESS, props<{ params: LoginRequest }>());
export const loginFailure = createAction(AppActions.LOGIN_FAILURE);

export const createUserCurrency = createAction(AppActions.CREATE_USER_CURRENCY, props<{ params: CreateUserCurrencyRequest }>());
export const createUserCurrencySuccess = createAction(AppActions.CREATE_USER_CURRENCY_SUCCES, props<{ params: CreateUserCurrencyRequest }>());
export const createUserCurrencyFailure = createAction(AppActions.CREATE_USER_CURRENCY_FAILURE);

export const getUserCurrency = createAction(AppActions.GET_USER_CURRENCY, props<{ params: CreateUserCurrencyRequest }>());
export const getUserCurrencySuccess = createAction(AppActions.GET_USER_CURRENCY_SUCCES, props<{ params: CreateUserCurrencyRequest }>());
export const getUserCurrencyFailure = createAction(AppActions.GET_USER_CURRENCY_FAILURE);

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

    createUserCurrency,
    createUserCurrencySuccess,
    createUserCurrencyFailure,

    getUserCurrency,
    getUserCurrencySuccess,
    getUserCurrencyFailure,
});

export type AppGetActionsUnion = typeof all;