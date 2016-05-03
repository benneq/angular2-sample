import {provide} from '@angular/core';
import {RouteDefinition} from '@angular/router-deprecated';
import {ROOT_ROUTE_TOKEN} from '../common/interface/rootroute';
import {STORE_PROVIDER_TOKEN} from '../store/store.module';
import {NotificationComponent} from './component/notification.component';
import {NotificationStoreProvider} from './store/notification.store.provider';



const NOTIFICATION_ROOT_ROUTE:RouteDefinition = {
    path: '/notifications',
    component: NotificationComponent,
    name: 'Notification',
    useAsDefault: false
}

export const NOTIFICATION_PROVIDERS: any[] = [
    provide(ROOT_ROUTE_TOKEN, { useValue: NOTIFICATION_ROOT_ROUTE, multi: true }),
    provide(STORE_PROVIDER_TOKEN, { useClass: NotificationStoreProvider, multi: true })
]