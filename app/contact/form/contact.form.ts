import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from 'angular2/core'
import {FormBuilder, Validators, ControlGroup} from 'angular2/common'
import {Contact, Address} from '../model/contact'
import {AddressForm} from './address.form'

@Component({
    selector: 'contactForm',
    template: `
        <div *ngIf="model">
            <div [ngFormModel]="form">
                Name: <input ngControl="name" type="text" [(ngModel)]="model.name" #name="ngForm">
                <div [hidden]="name.valid">Required</div>
            </div>
            <div *ngFor="#address of model.addresses; #i = index">
                <addressForm [model]="address"></addressForm>
                <button (click)="model.removeAddress(i)">Remove Address</button>
            </div>
            <button (click)="model.addAddress()">Add Address</button>
        </div>
    `,
    directives: [AddressForm]
})
export class ContactForm {
    @Input() model:Contact;
    form:ControlGroup;
    
    constructor(private fb:FormBuilder) {
        this.form = this.fb.group({
            name: ['', Validators.required]
        });
    }
        
}