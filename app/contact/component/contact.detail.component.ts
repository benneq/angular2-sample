import {Component} from 'angular2/core'
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router'
import {ItemComponent} from '../../common/component/item.component'
import {ContactService} from '../contact.service'
import {Contact} from '../model/contact'
import {ContactView} from '../view/contact.view'

@Component({
    template: `
        CONTACT DETAIL COMPONENT
        <div *ngIf="model">
            <a [routerLink]="['ContactEdit', {id: id}]">Edit</a>
            <contactView [model]="model"></contactView>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES, ContactView]
})
export class ContactDetailComponent extends ItemComponent<Contact, ContactService> {
    
    constructor(service:ContactService, params:RouteParams) {
        super(service, params);
    }
        
}