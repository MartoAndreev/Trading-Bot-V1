import { state } from "@angular/animations";
import { createSelector, MetaReducer } from "@ngrx/store"
import { _FEATURE_REDUCERS_TOKEN } from "@ngrx/store/src/tokens";
import { environment } from "src/environments/environment";
import { selectAppModuleState } from "..";
// import * as fromReducer from "./app.reducer"
// import * as fromApp from './app.reducer';
import { IAppState } from "./app.reducer";

export interface AppState {
    appState: IAppState
}

export const appState = (state: AppState) => state.appState;

export const selectAllBinanceCrypto = createSelector(
    appState,
    (state: IAppState) => state.allBinanceCrypto
    
)

export const selectSavedCryptos = createSelector(
    appState,
    (state: IAppState) => state.savedCryptos
    
)

// export interface SelectorState {
//     [fromReducer.appFeatureKey]: AppState;
// }
// export const selectAppState = createSelector(
//     selectAppModuleState,
//     (state: SelectorState) => state[fromApp.appFeatureKey],
// );

// export const loadBinanceCrypto = createSelector(
//     selectAppState,
//     (state: AppState) => state.allBinanceCrypto
// );
// export const metaReducers: MetaReducer<AppState>[]=!environment.production
// ? []
// : [];