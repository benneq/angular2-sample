import {Reducer} from '@ngrx/store';



export interface StoreProvider {
    name:string;
    reducer:Reducer<any>;
}