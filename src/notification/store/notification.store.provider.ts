import {Reducer, Action} from '@ngrx/store';
import {StoreProvider} from '../../store/store.provider';



export const ADD = 'ADD';



export class NotificationStoreProvider implements StoreProvider {
    name = "notifications";
    
    reducer:Reducer<any> = (state:any[]=[], action:Action) => {
        switch(action.type) {
            case ADD:
                return state.concat(action.payload);
            
            default:
                return state;
        }
    }
}