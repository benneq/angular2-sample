import {Directive, Renderer, ElementRef, forwardRef, Provider} from 'angular2/core'
import {Observable} from 'rxjs/Rx'
import {NG_VALUE_ACCESSOR, DefaultValueAccessor} from 'angular2/common'
import {CONST_EXPR} from 'angular2/src/facade/lang'



const PROVIDER = CONST_EXPR(new Provider(NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => StringFilterDirective), multi: true}));

@Directive({
    selector: '[stringFilter]',
    bindings: [PROVIDER]
})
export class StringFilterDirective extends DefaultValueAccessor {

    constructor(renderer: Renderer, private el: ElementRef) {
        super(renderer, el);
    }
    
    ngOnInit() {
        Observable.fromEvent(this.el.nativeElement, 'blur')
            .map((val:any) => val.target.value)
            .map(this.filter)
            .subscribe(val => {
                this.el.nativeElement.value = val;
                this.onChange(val);
            });
    }
    
    filter(val:string):string {
        return val.replace(/[\x7f\x80]/g, "");
    }

}