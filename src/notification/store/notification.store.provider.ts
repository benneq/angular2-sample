import {Reducer, Action} from '@ngrx/store';
import {StoreProvider} from '../../store/store.provider';



export class NotificationStoreProvider implements StoreProvider {
    name = "notifications";
    
    reducer:Reducer<number> = (state:any={}, action:Action) => {
        switch (action.type) {
            default:
                return state;
        }
    }
}