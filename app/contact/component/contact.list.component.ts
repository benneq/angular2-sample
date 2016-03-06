import {Component} from 'angular2/core'
import {RouteParams, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {ContactService} from '../contact.service'
import {Contact} from '../model/contact'
import {PageComponent} from '../../common/component/page.component'

@Component({
    template: `
        CONTACT LIST COMPONENT
        <div>
            <a [routerLink]="['ContactCreate']">New</a>
        </div>
        <div *ngIf="model">
            <div *ngFor="#item of model.content">
                <a [routerLink]="['ContactDetail', {id: item.id}]">{{item.name}}</a>
            </div>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class ContactListComponent extends PageComponent<Contact, ContactService> {
    
    constructor(service:ContactService) {
        super(service);
    }
    
}