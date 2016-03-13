import {Component} from 'angular2/core'
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router'
import {ContactService} from '../contact.service'
import {Contact} from '../model/contact'
import {PageComponent} from '../../common/component/page.component'

@Component({
    template: `
        CONTACT LIST COMPONENT
        <div>
            <a [routerLink]="['Create']">New</a>
        </div>
        <div *ngIf="model">
            <div *ngFor="#item of model.content">
                <a [routerLink]="['Show', {id: item.id}]">{{item.name}}</a>
            </div>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class ContactListComponent extends PageComponent<Contact, ContactService> {
    
    constructor(service:ContactService, params:RouteParams) {
        super(service, params);
    }
    
}