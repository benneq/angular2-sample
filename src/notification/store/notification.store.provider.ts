import {Reducer, Action} from '@ngrx/store';
import {StoreProvider} from '../../store/store.provider';
import {List} from 'immutable';
import {Notification} from '../model/notification';



export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const READ = 'READ';

export interface NotificationStore {
    notifications:List<Notification>;
}

export class NotificationStoreProvider implements StoreProvider {
    name = "notifications";
    
    reducer:Reducer<List<Notification>> = (state:Immutable.List<Notification>=List<Notification>(), action:Action) => {
        switch(action.type) {
            case ADD:
                return state.push(action.payload);
                
            case REMOVE:
                return state.remove(action.payload);    
            
            case READ:
                return state.update(action.payload.index, val => <Notification>val.set('read', action.payload.read));
            
            default:
                return state;
        }
    }
}