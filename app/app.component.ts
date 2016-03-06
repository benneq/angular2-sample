import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {ContactComponent} from './contact/component/contact.component';

@Component({
    selector: 'app',
    template: `
        <h1>Angular 2 App</h1>
        <div>
            <router-outlet></router-outlet>
        </div>
        `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/contacts/...', component: ContactComponent, name: 'ContactComponent', useAsDefault: true }
])
export class AppComponent {

    constructor() {
        
    }
    
}