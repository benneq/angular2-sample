import {Component, Optional, Input, Inject, Renderer, ElementRef} from 'angular2/core'
import {DefaultValueAccessor, ControlGroup, NgControl, Control, Validators, FormBuilder} from 'angular2/common'
import {QueryDirective} from '../../common/directive/query.directive'
import {Observable, Subject} from 'rxjs/Rx'

@Component({
    selector: 'contactFilter',
    template: `
        <div [ngFormModel]="form">
            Query: <input query type="text" ngControl="q">
        </div>
    `,
    directives: [QueryDirective]
})
export class ContactFilterForm extends DefaultValueAccessor {
    form: ControlGroup;
    
    
       
    constructor(@Optional() ngControl:NgControl, renderer:Renderer, el:ElementRef, fb:FormBuilder) {
        super(renderer, el);
        if(ngControl) ngControl.valueAccessor = this;
        
        this.form = fb.group({
            'q': ['']
        });
    }
    
    ngOnInit() : void {
        this.form.valueChanges.subscribe(val => this.onChange(val));
    }
    
    writeValue(value:any) : void {
        if(value) {
            (<Control>this.form.controls['q']).updateValue(value.q, {emitEvent:false});
        }
    }
        
}