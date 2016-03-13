import {Component} from 'angular2/core'
import {Router, RouteParams} from 'angular2/router'
import {ContactService} from '../contact.service'
import {ContactForm} from '../form/contact.form'
import {Contact} from '../model/contact'
import {ItemComponent} from '../../common/component/item.component'

@Component({
    template: `
        CONTACT EDIT COMPONENT
        <contactForm [model]="model"></contactForm>
        <button (click)="onSave()">Save</button>
    `,
    directives: [ContactForm]
})
export class ContactEditComponent extends ItemComponent<Contact, ContactService> {
    
    constructor(protected service:ContactService, protected params:RouteParams, protected router:Router) {
        super(service, params);
    }
    
    onSave() {
       this.service.update(this.id, this.model).subscribe(
           val => this.router.navigate(['Detail', { id: val }]),
           err => console.log("err")
       );
    }
        
}