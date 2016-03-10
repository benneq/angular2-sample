import {Directive, Renderer, ElementRef, forwardRef, Provider, Input} from 'angular2/core'
import {Observable} from 'rxjs/Rx'
import {NG_VALUE_ACCESSOR, DefaultValueAccessor} from 'angular2/common'
import {CONST_EXPR} from 'angular2/src/facade/lang'

const PROVIDER = CONST_EXPR(new Provider(NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => QueryDirective), multi: true}));

@Directive({
    selector: '[query]',
    bindings: [PROVIDER]
})
export class QueryDirective extends DefaultValueAccessor {
    @Input() timeout: number = 250;
    @Input() omitEqual: boolean = true;
    @Input() omitMultiWhitespace: boolean = true;
    @Input() trim: boolean = true;

    constructor(_renderer: Renderer, private el: ElementRef) {
        super(_renderer, el);
    }
    
    ngOnInit() {
        var o:Observable<string> = Observable.fromEvent(this.el.nativeElement, 'keyup')
            .map(val => this.el.nativeElement.value)
            .debounceTime(this.timeout)
            
        if(this.omitMultiWhitespace) {
            o = o.map((val: string) => val.replace(/ +(?= )/g,''));
        }
        
        if(this.trim) {
            o = o.map((val: string) => val.trim());
        }
        
        if(this.omitEqual) {
            o = o.distinctUntilChanged();
        }
        
        o.subscribe(this.onChange);
    }

} 