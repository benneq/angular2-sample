import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from 'angular2/core'
import {FormBuilder, Validators, ControlGroup} from 'angular2/common'
import {Contact} from '../model/contact'
import {AddressView} from './address.view'

@Component({
    selector: 'contactView',
    template: `
        <div *ngIf="model">
            Name: {{model.name}}
            <div *ngFor="#address of model.addresses">
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