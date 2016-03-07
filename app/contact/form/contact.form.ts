import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from 'angular2/core'
import {FormBuilder, Validators, ControlGroup} from 'angular2/common'
import {Contact} from '../model/contact'
import {AddressForm} from './address.form'

@Component({
    selector: 'contactForm',
    template: `
        <div *ngIf="model">
            <div [ngFormModel]="form">
                Name: <input ngControl="name" type="text" [(ngModel)]="model.name" #name="ngForm">
                <div [hidden]="name.valid">Required</div>
            </div>
            <addressForm *ngFor="#address of model.addresses" [model]="address"></addressForm>
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