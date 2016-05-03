import {OpaqueToken, provide} from '@angular/core';
import {provideStore, REDUCER, combineReducers} from '@ngrx/store';
import {StoreProvider} from './store.provider';



export const STORE_PROVIDER_TOKEN = new OpaqueToken('StoreProvider');



export const STORE_PROVIDERS: any[] = [
    provideStore({}),
    provide(REDUCER, {
        deps: [STORE_PROVIDER_TOKEN],
        useFactory(reducers:StoreProvider[]) {
            var obj = reducers.reduce((o, v) => {
                o[v.name] = v.reducer;
                return o;
            }, {});
            return combineReducers(obj);
        }
    })
]