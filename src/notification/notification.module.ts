import {provide} from 'angular2/core'
import {RouteDefinition} from 'angular2/router'
import {ROOT_ROUTE_TOKEN} from '../common/interface/rootroute'
import {NotificationComponent} from './component/notification.component'

const NOTIFICATION_ROOT_ROUTE:RouteDefinition = {
    path: '/notifications',
    component: NotificationComponent,
    name: 'Notification',
    useAsDefault: false
}

export const NOTIFICATION_PROVIDERS: any[] = [
    provide(ROOT_ROUTE_TOKEN, { useValue: NOTIFICATION_ROOT_ROUTE, multi: true })
]