import {Component, Inject} from 'angular2/core'
import {ROUTER_DIRECTIVES, Router, RouteDefinition} from 'angular2/router'
import {NavigationComponent} from './navigation/component/navigation.component'
import {ROOT_ROUTE_TOKEN} from './common/interface/rootroute'

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
export class AppComponent {

    constructor(router:Router, @Inject(ROOT_ROUTE_TOKEN) rootRoutes:RouteDefinition[]) {
        router.config(rootRoutes);
    }
    
}