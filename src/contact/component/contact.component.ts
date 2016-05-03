import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated';
import {ContactCreateComponent} from './contact.create.component';
import {ContactListComponent} from './contact.list.component';
import {ContactShowComponent} from './contact.show.component';
import {ContactEditComponent} from './contact.edit.component';



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
    { path: '/', component: ContactListComponent, name: 'List', useAsDefault: true },
    { path: '/new', component: ContactCreateComponent, name: 'Create' },
    { path: '/:id', component: ContactShowComponent, name: 'Show' },
    { path: '/:id/edit', component: ContactEditComponent, name: 'Edit' }
])
export class ContactComponent {
    
    constructor() {
        
    }
    
}