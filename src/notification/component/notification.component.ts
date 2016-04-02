import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router'
import {Store} from '@ngrx/store';
import {Observable} from 'RxJs';
import {ADD} from '../store/notification.store.provider';



@Component({
    template: `
        NOTIFICATION COMPONENT
        <ul>
            <li *ngFor="#notification of notifications | async">{{notification}}</li>
        </ul>
    `
})
export class NotificationComponent {
    notifications: Observable<any>;
    
    constructor(store:Store<any>) {
        this.notifications = store.select('notifications');
    }
    
}