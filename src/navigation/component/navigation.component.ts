import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {NavigationService} from '../navigation.service';



@Component({
    selector: 'navigation',
    template: `
        NAV
        <nav>
            <ul>
                <li *ngFor="let route of routes"><a [routerLink]="route.path">{{route.name}}</a></li>
            </ul>
        </nav>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class NavigationComponent {
    routes;
    
    constructor(service:NavigationService) {
        service.get().subscribe(
            val => this.routes = val,
            err => console.log("err")
        );
    }
    
}