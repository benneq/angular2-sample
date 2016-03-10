import {Component} from 'angular2/core'
import {Router} from 'angular2/router'
import {ContactService} from '../contact.service'
import {Contact} from '../model/contact'
import {ContactForm} from '../form/contact.form'

@Component({
    template: `
        CONTACT CREATE COMPONENT
        <contactForm [model]="model"></contactForm>
        <button (click)="onCreate()">Create</button>
    `,
    directives: [ContactForm]
})
export class ContactCreateComponent {
    model:Contact;
    
    constructor(protected service:ContactService, protected router:Router) {
        this.model = new Contact();
    }
    
    onCreate() {
        this.service.create(this.model).subscribe(
           val => this.router.navigate(['Detail', { id: val }]),
           err => console.log("err")
        )
    }
        
}