import {provide} from '@angular/core';
import {RouteDefinition} from '@angular/router-deprecated';
import {ContactService} from './contact.service';
import {HAS_PAGE_TOKEN} from '../common/interface/haspage.interface';
import {ROOT_ROUTE_TOKEN} from '../common/interface/rootroute';
import {ContactComponent} from './component/contact.component';



const CONTACT_ROOT_ROUTE:RouteDefinition = {
    path: '/contacts/...',
    component: ContactComponent,
    name: 'Contact',
    useAsDefault: true
}

export const CONTACT_PROVIDERS: any[] = [
    ContactService,
    provide(HAS_PAGE_TOKEN, { useClass: ContactService, multi: true }),
    provide(ROOT_ROUTE_TOKEN, { useValue: CONTACT_ROOT_ROUTE, multi: true })
]