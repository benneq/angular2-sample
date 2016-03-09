import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES} from 'angular2/router'
import {NavigationService} from '../navigation.service'

@Component({
    selector: 'navigation',
    template: `
        NAV
        <nav>
            <ul>
                <li><a [routerLink]="['/Contact']">List Contacts</a></li>
                <li><a [routerLink]="['/Contact/ContactCreate']">New Contact</a></li>
            </ul>
        </nav>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class NavigationComponent {
    
    constructor(service:NavigationService) {
        
    }
    
}