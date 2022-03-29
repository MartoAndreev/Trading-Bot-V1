import { state } from "@angular/animations"
import { Action, createReducer, on } from "@ngrx/store"
import * as AppActions from "./app.actions"
import { getSingleCryptoPriceSuccess, loadBinanceCryptoSuccess, loginSuccess, loginFailure } from "./app.actions";
import { ListRequestRes } from "./interfaces";


export const appFeatureKey = "appState";

export interface IAppState {
    allBinanceCrypto: Array<ListRequestRes>;
    savedCryptos: Array<any>;
    userId: number;
    email: string;
    password: string;
}

export const initialState: IAppState = {
    allBinanceCrypto: [],
    savedCryptos: [],
    userId: 0,
    email: "",
    password: ""
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