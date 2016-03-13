import {provide} from 'angular2/core'
import {ContactService} from './contact.service'
import {HAS_PAGE_TOKEN} from '../common/interface/haspage.interface'
import {ROOT_ROUTE_TOKEN, RootRoute} from '../common/interface/rootroute'
import {ContactComponent} from './component/contact.component'

class ContactRoute implements RootRoute {
    path = '/contacts/...';
    component = ContactComponent;
    name = 'Contact';
    useAsDefault = true;
}

export const CONTACT_PROVIDERS: any[] = [
    ContactService,
    provide(HAS_PAGE_TOKEN, { useClass: ContactService, multi: true }),
    provide(ROOT_ROUTE_TOKEN, { useClass: ContactRoute, multi: true })
]