import { state } from "@angular/animations"
import { Action, createReducer, on } from "@ngrx/store"
import * as AppActions from "./app.actions"
import { getSingleCryptoPriceSuccess, loadBinanceCryptoSuccess } from "./app.actions";
import { ListRequestRes } from "./interfaces";

export const appFeatureKey = "appState";

export interface IAppState {
    allBinanceCrypto?: Array<ListRequestRes>;
    savedCryptos?: Array<any>;
}

export const initialState: IAppState = {
    allBinanceCrypto: [],
    savedCryptos: [],
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
            savedCryptos: { ...state.savedCryptos, ...params}
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