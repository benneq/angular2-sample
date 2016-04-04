import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {List} from 'immutable';
import {Store} from '@ngrx/store';
import {Observable} from 'RxJs';
import {Notification} from '../model/notification';
import {NotificationStore} from '../store/notification.store.provider';



@Component({
    template: `
        NOTIFICATION COMPONENT
        <ul>
            <li *ngFor="#notification of notifications | async">{{notification.content}}, {{notification.createdAt}}</li>
        </ul>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationComponent {
    notifications: Observable<List<Notification>>;
    
    constructor(store:Store<NotificationStore>) {
        this.notifications = store.select(store => store.notifications);
    }
    
}