import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {List} from 'immutable';
import {Store} from '@ngrx/store';
import {Observable} from 'RxJs';
import {Notification} from '../model/notification';
import {NotificationStore, ReadAction} from '../store/notification.store.provider';



@Component({
    template: `
        NOTIFICATION COMPONENT
        <ul>
            <li *ngFor="#notification of notifications | async ; #i = index">{{notification.content}} <button (click)="read(i, !notification.read)">{{notification.read ? 'Unread' : 'Read'}}</button></li>
        </ul>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationComponent {
    notifications: Observable<List<Notification>>;
    
    constructor(private store:Store<NotificationStore>) {
        this.notifications = store.select(store => store.notifications);
    }
    
    read(i, value):void {
        this.store.dispatch(new ReadAction({index:i, read:value}));
    }
    
}