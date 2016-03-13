import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {FormBuilder, Validators, ControlGroup} from 'angular2/common'
import {Address} from '../model/contact' 

@Component({
    selector: 'addressForm',
    template: `
        <div *ngIf="model">
            <div [ngFormModel]="form">
                Street: <input ngControl="street" type="text" [(ngModel)]="model.street" #street="ngForm">
                <div [hidden]="street.valid">Required</div>
            </div>
        </div>
    `,
    directives: []
})
export class AddressForm {
    @Input() model:Address;
    form:ControlGroup;
    
    constructor(private fb:FormBuilder) {
        this.form = this.fb.group({
            street: ['', Validators.required]
        });
    }
        
}