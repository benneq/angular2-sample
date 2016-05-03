import {Directive, Renderer, ElementRef, forwardRef, Provider, Input} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {NG_VALUE_ACCESSOR, DefaultValueAccessor} from '@angular/common';



const PROVIDER = new Provider(NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => QueryDirective), multi: true});

@Directive({
    selector: '[query]',
    bindings: [PROVIDER]
})
export class QueryDirective extends DefaultValueAccessor {
    @Input() omitMultiWhitespace: boolean = true;
    @Input() trim: boolean = true;

    constructor(renderer: Renderer, private el: ElementRef) {
        super(renderer, el);
    }
    
    ngOnInit() {
        var o:Observable<string> = Observable.fromEvent(this.el.nativeElement, 'keyup')
            .map((val:any) => val.target.value);
            
        if(this.omitMultiWhitespace) {
            o = o.map((val: string) => val.replace(/ +(?= )/g,''));
        }
        
        if(this.trim) {
            o = o.map((val: string) => val.trim());
        }
        
        o.subscribe(val => this.onChange(val));
    }

}