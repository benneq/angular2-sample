import {Component} from 'angular2/core'
import {Router, RouteParams} from 'angular2/router'
import {ContactService} from '../contact.service'
import {Contact} from '../model/contact'
import {ItemComponent} from '../../common/component/item.component'

@Component({
    template: `
        CONTACT EDIT COMPONENT
        <div *ngIf="model">
            Name: <input [(ngModel)]="model.name">
            <button (click)="onSave()">Save</button>
        </div>
    `,
    directives: []
})
export class ContactEditComponent extends ItemComponent<Contact, ContactService> {
    
    constructor(protected service:ContactService, protected params:RouteParams, protected router:Router) {
        super(service, params);
    }
    
    onSave() {
       this.service.update(this.id, this.model).subscribe(
           val => this.router.navigate(['ContactDetail', { id: val }]),
           err => console.log("err")
       );
    }
        
}