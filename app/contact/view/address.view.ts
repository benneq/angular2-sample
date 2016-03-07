import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from 'angular2/core'
import {FormBuilder, Validators, ControlGroup} from 'angular2/common'
import {Address} from '../model/contact'

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