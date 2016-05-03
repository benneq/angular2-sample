import {Directive, Renderer, ElementRef, forwardRef, Provider} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {NG_VALUE_ACCESSOR, DefaultValueAccessor} from '@angular/common';



const PROVIDER = new Provider(NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => StringFilterDirective), multi: true});

@Directive({
    selector: '[stringFilter]',
    bindings: [PROVIDER]
})
export class StringFilterDirective extends DefaultValueAccessor {
    val:string;

    constructor(renderer: Renderer, private el: ElementRef) {
        super(renderer, el);
    }
    
    ngOnInit() {
        this.val = this.el.nativeElement.value;
        
        Observable.fromEvent(this.el.nativeElement, 'input')
            .map((val:Event) => val.target)
            .subscribe((val:HTMLInputElement) => {
                this.val = this.filter(val.value);
                
                if(this.val != val.value) {
                    let selectionStart = val.selectionStart;
   
                    val.value = this.val;
                
                    val.selectionStart = selectionStart;
                    val.selectionEnd = selectionStart;
                }
            });
    }
    
    filter(val:string):string {
        return val.replace(/[\x7f\x80]/g, "");
    }

}