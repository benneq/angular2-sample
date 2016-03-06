import {Component} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {ContactService} from '../contact.service';

@Component({
    template: `
        CONTACT DETAIL COMPONENT
        <div *ngIf="model">
            <a [routerLink]="['ContactEdit', {id: id}]">{{model?.name}}</a>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class ContactDetailComponent {
    
    constructor(service: ContactService) {
        
    }
        
}