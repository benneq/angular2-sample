import {Directive, EventEmitter, Input, Output} from 'angular2/core'
import {NgModel} from 'angular2/common';
import {Observable} from 'rxjs/Observable';

@Directive({
    selector: '[queryDirective][ngModel]'
})
export class QueryDirective {
    @Input() timeout: number = 250;
    @Input() omitEqual: boolean = true;
    @Input() omitMultiWhitespace: boolean = true;
    @Input() trim: boolean = true;
    
    constructor(public model:NgModel) {
        
    }
    
    ngOnInit() {
        var o: Observable<string> = this.model.control.valueChanges
            .debounceTime(this.timeout);
        
        if(this.omitMultiWhitespace) {
            o = o.map(val => val.replace(/ +(?= )/g,''));
        }
        
        if(this.trim) {
            o = o.map(val => val.trim());
        }
        
        if(this.omitEqual) {
            o = o.filter(val => val != this.model.value);
        }
        
        o.subscribe(val => {
            this.model.control.updateValue(val, {emitEvent:true});
        });
    }
}