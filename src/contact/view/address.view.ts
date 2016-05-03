import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {FormBuilder, Validators, ControlGroup} from '@angular/common';
import {Address} from '../model/contact';



@Component({
    selector: 'addressView',
    template: `
        <div *ngIf="model">
            Street: {{model.street}}
        </div>
    `,
    directives: []
})
export class AddressView {
    @Input() model:Address;
    
    constructor() {
        
    }
        
}