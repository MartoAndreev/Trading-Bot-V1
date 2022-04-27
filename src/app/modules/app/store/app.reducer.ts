import { state } from "@angular/animations"
import { Actions } from "@ngrx/effects";
import { Action, createReducer, on } from "@ngrx/store"
import * as AppActions from "./app.actions"
import { getSingleCryptoPriceSuccess, loadBinanceCryptoSuccess, loginSuccess, loginFailure, getByCurrencyRequestSuccess, getByCurrencyRequestFailure, getByUserRequestSuccess, getByUserRequestFailure, removeBotTrade } from "./app.actions";
import { BotRequest2, BotTable, ListRequestRes } from "./interfaces";


export const appFeatureKey = "appState";

export interface IAppState {
    allBinanceCrypto: Array<ListRequestRes>;
    savedCryptos: Array<any>;
    userId: number;
    email: string;
    password: string;
    user: string;
    getBotTableInfo: Array<BotRequest2>;
    botTable: Array<BotTable>;
}

export const initialState: IAppState = {
    allBinanceCrypto: [],
    savedCryptos: [],
    getBotTableInfo: [],
    userId: 0,
    email: "",
    password: "",
    user: "",
    botTable: [],

}

const appReducer = createReducer(
    getInitalState(),
    on(loadBinanceCryptoSuccess, (state, { params }) => {
        return {
            ...state,
            allBinanceCrypto: params
        }
    }),

    on(getSingleCryptoPriceSuccess, (state, { params }) => {
        return {
            ...state,
            savedCryptos: { ...state.savedCryptos, ...params }
        }
    }),

    on(loginSuccess, (state, { params }) => {
        return {
            ...state,
            email: params.email,
            password: params.password
        }
    }),

    on(loginFailure, (state) => {
        return {
            ...state,
            email: "",
            password: ""
        }
    }),

    on(loadBinanceCryptoSuccess, (state, { params }) => {
        return {
            ...state,
            getBotTableInfo: params
        }
    }),

    on(getByUserRequestSuccess, (state, { params }) => {
        return {
            ...state,
            botTable: params
        }
    }),

    // on(removeBotTrade, (state, { params }) => {
    //     return {
    //         ...state,
    //         botTable: params
    //     }
    // }),


    // on(getByCurrencyRequestSuccess, (state, { params }) => {
    //     return {
    //         ...state,
    //         currency: params.currency,
    //         price: params.price,
    //         action: params.action
    //     }
    // }),


    // on(getByCurrencyRequestFailure, (state) => {
    //     return {
    //         ...state,
    //         currency: null,
    //         price: null,
    //         action: null,
    //     }
    // }),

    // on(getByUserRequestSuccess, (state, { params }) => {
    //     return {
    //         ...state,
    //         user: params.user,

    //     }
    // }),

    // on(getByUserRequestFailure, (state) => {
    //     return {
    //         ...state,
    //         user: "",
    //     }
    // }),

)




export function reducer(state: IAppState | undefined, action: Action) {
    return appReducer(state, action);
}

function getSavedState(): IAppState {
    const savedState = localStorage.getItem('appState');
    if (savedState) {
        return JSON.parse(savedState)["appState"];
    }
    return initialState;
}

function getInitalState(): IAppState {
    const savedState = getSavedState();
    if (savedState) {
        return savedState;
    } else {
        return initialState;
    }
}