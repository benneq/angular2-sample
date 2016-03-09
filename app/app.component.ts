import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router'
import {ContactComponent} from './contact/component/contact.component'
import {NavigationComponent} from './navigation/component/navigation.component'

@Component({
    selector: 'app',
    template: `
        <navigation></navigation>
        <div>
            <router-outlet></router-outlet>
        </div>
        `,
    directives: [ROUTER_DIRECTIVES, NavigationComponent]
})
@RouteConfig([
    { path: '/contacts/...', component: ContactComponent, name: 'Contact', useAsDefault: true }
])
export class AppComponent {

    constructor() {
        
    }
    
}