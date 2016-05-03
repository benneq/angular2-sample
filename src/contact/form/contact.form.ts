import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {FormBuilder, Validators, ControlGroup} from '@angular/common';
import {Contact} from '../model/contact';
import {AddressForm} from './address.form';
import {EntitySearchComponent} from '../../common/component/entitysearch.component';



@Component({
    selector: 'contactForm',
    template: `
        <div *ngIf="model">
            <div [ngFormModel]="form">
                <div>
                    Name: <input ngControl="name" type="text" [(ngModel)]="model.name" #name="ngForm">
                    <span [hidden]="name.valid">Required</span>
                </div>
                <div>
                    <!-- Company: <entitySearch ngControl="company" [(ngModel)]="model.company" #company="ngForm"></entitySearch> -->
                    <!-- <span [hidden]="company.valid">Required</span> -->
                </div>
            </div>
            <div *ngFor="let address of model.addresses; let i = index">
                <addressForm [model]="address"></addressForm>
                <button (click)="model.removeAddress(i)">Remove Address</button>
            </div>
            <button (click)="model.addAddress()">Add Address</button>
        </div>
    `,
    directives: [AddressForm, EntitySearchComponent]
})
export class ContactForm {
    @Input() model:Contact;
    form:ControlGroup;
    
    constructor(private fb:FormBuilder) {
        this.form = this.fb.group({
            name: ['', Validators.required],
            company: [null, Validators.required]
        });
    }
        
}