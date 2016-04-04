import {Reducer, Action} from '@ngrx/store';
import {StoreProvider} from '../../store/store.provider';
import {List} from 'immutable';



export const ADD = 'ADD';
export const REMOVE = 'REMOVE';



export class NotificationStoreProvider implements StoreProvider {
    name = "notifications";
    
    reducer:Reducer<List<string>> = (state:List<string>=List<string>(), action:Action) => {
        switch(action.type) {
            case ADD:
                return state.push(action.payload);
                
            case REMOVE:
                return state.remove(action.payload);    
            
            default:
                return state;
        }
    }
}