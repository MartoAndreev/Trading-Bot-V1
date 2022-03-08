import { state } from "@angular/animations"
import { Action, createReducer, on } from "@ngrx/store"
import * as AppActions from "./app.actions"

export const appFeatureKey = "appState";

export interface IAppState {
    allBinanceCrypto: any;
}

export const initialState: IAppState = {
    allBinanceCrypto: null,
}

const appReducer = createReducer(
    initialState,
    on(AppActions.loadBinanceCryptoSuccess, (state, { allBinanceCrypto }) => {
        console.log(allBinanceCrypto);
        console.log(localStorage.getItem("appState"));
        
        return {
            ...state,
            allBinanceCrypto: allBinanceCrypto.data
        }
    })
)

export function reducer(state: IAppState | undefined, action: Action) {
    return appReducer(state, action);
} 