import {Component} from 'angular2/core'
import {RouteParams, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {ContactService} from '../contact.service'
// import {Contact} from './contact.interface';
// import {PageComponent} from '../common/page.component';

@Component({
    template: `
        CONTACT LIST COMPONENT<br>
        <div *ngIf="model">
            <a *ngFor="#item of model.content" [routerLink]="['ContactDetail', {id: item.id}]">{{item.name}} </a>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class ContactListComponent {
    
    constructor(service: ContactService) {
        
    }
    
}