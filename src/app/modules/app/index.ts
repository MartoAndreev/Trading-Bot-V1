import { Action, combineReducers, createFeatureSelector } from "@ngrx/store";
import * as fromApp from './store/app.reducer';

export const APP_FEATURE_KEY = 'appModuleState';

export const selectAppModuleState = createFeatureSelector<AllAppState>(APP_FEATURE_KEY);

export interface AllAppState {
    [fromApp.appFeatureKey]: fromApp.IAppState;
}

export function reducers(state: AllAppState | undefined, action: Action): any {
    return combineReducers({
      [fromApp.appFeatureKey]: fromApp.reducer,
    })(state, action);
}