import {Reducer, Action} from '@ngrx/store';
import {StoreProvider} from '../../store/store.provider';
import {List} from 'immutable';
import {Notification} from '../model/notification';



export class AddAction implements Action {
    type;
    constructor(public payload:Notification) {}
}

export class RemoveAction implements Action {
    type;
    constructor(public payload:number) {}
}

export class ReadAction implements Action {
    type;
    constructor(public payload:{index:number,read:boolean}) {}
}



export interface NotificationStore {
    notifications:List<Notification>;
}

export class NotificationStoreProvider implements StoreProvider {
    name = "notifications";
    
    reducer:Reducer<List<Notification>> = (state:Immutable.List<Notification>=List<Notification>(), action:Action) => {
        if(action instanceof AddAction) {
            return state.push(action.payload);
        }
        
        if(action instanceof RemoveAction) {
            return state.remove(action.payload);
        }
        
        if(action instanceof ReadAction) {
            return state.update(action.payload.index, val => <Notification>val.set('read', action.payload.read));
        }
        
        return state;
    }
}