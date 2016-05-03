import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {FormBuilder, Validators, ControlGroup} from '@angular/common';
import {Contact} from '../model/contact';
import {AddressView} from './address.view';



@Component({
    selector: 'contactView',
    template: `
        <div *ngIf="model">
            <div>
                Name: {{model.name}}
            </div>
            <div *ngIf="model.company">
                Company: {{model.company.name}}
            </div>
            <div *ngFor="let address of model.addresses">
                <addressView [model]="address"></addressView>
            </div>
        </div>
    `,
    directives: [AddressView]
})
export class ContactView {
    @Input() model:Contact;
    
    constructor() {
        
    }
        
}