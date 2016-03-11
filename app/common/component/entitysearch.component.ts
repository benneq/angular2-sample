import {Component, Optional, Inject, Renderer, ElementRef} from 'angular2/core'
import {DefaultValueAccessor, NgControl, Control} from 'angular2/common'
import {HasPage, HAS_PAGE_TOKEN} from '../interface/haspage.interface'
import {QueryDirective} from '../directive/query.directive'

@Component({
    selector: 'entitySearch',
    template: `
        <input query type="text" [ngFormControl]="term">
        <ul>
            <li *ngFor="#res of results" (click)="select(res)">{{res.name}}</li>
        </ul>
    `,
    directives: [QueryDirective]
})
export class EntitySearchComponent extends DefaultValueAccessor {
    results:any[];
    term = new Control();
    
    constructor(@Inject(HAS_PAGE_TOKEN) protected services:HasPage<any>[], @Optional() ngControl: NgControl, renderer: Renderer, private el: ElementRef) {
        super(renderer, el);
        if(ngControl) ngControl.valueAccessor = this;
    }
    
    ngOnInit() {
        this.term.valueChanges
            .switchMap(val => this.services[0].getPage(0, 20))
            .subscribe(val => this.results = (<any>val).content);
    }
    
    select(item) {
        this.onChange(item);
        this.term.updateValue(item.name);
    }
        
}