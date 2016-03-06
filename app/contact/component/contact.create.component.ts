import {Component} from 'angular2/core'
import {Router} from 'angular2/router'
import {ContactService} from '../contact.service'

@Component({
    template: `
        CONTACT CREATE COMPONENT
        <div>
            <button (click)="onCreate()">Create</button>
        </div>
    `,
    directives: []
})
export class ContactCreateComponent {
    
    constructor(protected service:ContactService, protected router:Router) {
        
    }
    
    onCreate() {
        this.service.create({name:"New Name"}).subscribe(
           val => this.router.navigate(['ContactDetail', { id: val }]),
           err => console.log("err")
        )
    }
        
}