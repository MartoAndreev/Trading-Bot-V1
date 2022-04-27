import { createAction, props, union } from "@ngrx/store";
import { BotRequest, BotRequest2, BotTable, CreateUserCurrencyRequest, ListRequestRes, LoginRequest, SignupRequest } from "./interfaces";

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

    SIGNUP = "[User] Signup",
    SIGNUP_SUCCESS = "[User] Signup Success",
    SIGNUP_FAILURE = "[User] Signup Failure",

    CREATE_USER_CURRENCY = "[User] Create User Currency",
    CREATE_USER_CURRENCY_SUCCES = "[User] Create User Currency Success",
    CREATE_USER_CURRENCY_FAILURE = "[User] Create User Currency Failure",

    GET_USER_CURRENCY = "[User] Get User Currency",
    GET_USER_CURRENCY_SUCCES = "[User] Get User Currency Success",
    GET_USER_CURRENCY_FAILURE = "[User] Get User Currency Failure",

    CREATE_TRANSACTION_REQUEST = "[User] Create Transaction Request",
    CREATE_TRANSACTION_REQUEST_SUCCES = "[User] Create Transaction Request Success",
    CREATE_TRANSACTION_REQUEST_FAILURE = "[User] Create Transaction Request Failure",

    GET_BY_CURRENCY_REQUEST = "[User] Get By Currency Request",
    GET_BY_CURRENCY_REQUEST_SUCCES = "[User] Get By Currency Request Success",
    GET_BY_CURRENCY_REQUEST_FAILURE = "[User] Get By Currency Request Failure",

    GET_BY_USER_REQUEST = "[User] Get By User Request",
    GET_BY_USER_REQUEST_SUCCES = "[User] Get By User Request Success",
    GET_BY_USER_REQUEST_FAILURE = "[User] Get By User Request Failure",
    
    REMOVE_BOT_TRADE = "[User] Remove Bot Trade",
    REMOVE_BOT_TRADE_SUCCES = "[User] Remove Bot Trade Success",
    REMOVE_BOT_TRADE_FAILURE = "[User] Remove Bot Trade Failure",
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

export const signup = createAction(AppActions.SIGNUP, props<{ params: SignupRequest }>());
export const signupSuccess = createAction(AppActions.SIGNUP_SUCCESS, props<{ params: SignupRequest }>());
export const signupFailure = createAction(AppActions.SIGNUP_FAILURE);

export const createUserCurrency = createAction(AppActions.CREATE_USER_CURRENCY, props<{ params: CreateUserCurrencyRequest }>());
export const createUserCurrencySuccess = createAction(AppActions.CREATE_USER_CURRENCY_SUCCES, props<{ params: CreateUserCurrencyRequest }>());
export const createUserCurrencyFailure = createAction(AppActions.CREATE_USER_CURRENCY_FAILURE);

export const getUserCurrency = createAction(AppActions.GET_USER_CURRENCY, props<{ params: CreateUserCurrencyRequest }>());
export const getUserCurrencySuccess = createAction(AppActions.GET_USER_CURRENCY_SUCCES, props<{ params: CreateUserCurrencyRequest }>());
export const getUserCurrencyFailure = createAction(AppActions.GET_USER_CURRENCY_FAILURE);

export const createTransactionRequest = createAction(AppActions.CREATE_TRANSACTION_REQUEST, props<{ params: BotRequest2 }>());
export const createTransactionRequestSuccess = createAction(AppActions.CREATE_TRANSACTION_REQUEST_SUCCES, props<{ params: BotRequest2 }>());
export const createTransactionRequestFailure = createAction(AppActions.CREATE_TRANSACTION_REQUEST_FAILURE);

export const getByCurrencyRequest = createAction(AppActions.GET_BY_CURRENCY_REQUEST, props<{ params: string }>());
export const getByCurrencyRequestSuccess = createAction(AppActions.GET_BY_CURRENCY_REQUEST_SUCCES, props<{ params: any }>());
export const getByCurrencyRequestFailure = createAction(AppActions.GET_BY_CURRENCY_REQUEST_FAILURE);

export const getByUserRequest = createAction(AppActions.GET_BY_USER_REQUEST, props<{ params: string }>());
export const getByUserRequestSuccess = createAction(AppActions.GET_BY_USER_REQUEST_SUCCES, props<{ params: Array<BotTable> }>());
export const getByUserRequestFailure = createAction(AppActions.GET_BY_USER_REQUEST_FAILURE);

export const removeBotTrade = createAction(AppActions.REMOVE_BOT_TRADE, props<{ params: string }>());
export const removeBotTradeSuccess = createAction(AppActions.REMOVE_BOT_TRADE_SUCCES);
export const removeBotTradeFailure = createAction(AppActions.REMOVE_BOT_TRADE_FAILURE);

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

    signup,
    signupSuccess,
    signupFailure,

    createUserCurrency,
    createUserCurrencySuccess,
    createUserCurrencyFailure,

    getUserCurrency,
    getUserCurrencySuccess,
    getUserCurrencyFailure,

    createTransactionRequest,
    createTransactionRequestSuccess,
    createTransactionRequestFailure,

    getByCurrencyRequest,
    getByCurrencyRequestSuccess,
    getByCurrencyRequestFailure,

    getByUserRequest,
    getByUserRequestSuccess,
    getByUserRequestFailure,

    removeBotTrade,
    removeBotTradeSuccess,
    removeBotTradeFailure,
});

export type AppGetActionsUnion = typeof all;