import {Component} from 'angular2/core'
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router'
import {ItemComponent} from '../../common/component/item.component'
import {ContactService} from '../contact.service'
import {Contact} from '../model/contact'

@Component({
    template: `
        CONTACT DETAIL COMPONENT
        <div *ngIf="model">
            <a [routerLink]="['ContactEdit', {id: id}]">{{model.name}}</a>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class ContactDetailComponent extends ItemComponent<Contact, ContactService> {
    
    constructor(service:ContactService, params:RouteParams) {
        super(service, params);
    }
        
}