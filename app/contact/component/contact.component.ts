import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router'
import {ContactCreateComponent} from './contact.create.component'
import {ContactListComponent} from './contact.list.component'
import {ContactDetailComponent} from './contact.detail.component'
import {ContactEditComponent} from './contact.edit.component'


@Component({
    template: `
        CONTACT COMPONENT
        <div>
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', component: ContactListComponent, name: 'ContactList', useAsDefault: true },
    { path: '/new', component: ContactCreateComponent, name: 'ContactCreate' },
    { path: '/:id', component: ContactDetailComponent, name: 'ContactDetail' },
    { path: '/:id/edit', component: ContactEditComponent, name: 'ContactEdit' }
])
export class ContactComponent {
    
    constructor() {
        
    }
    
}