import {Component, Optional, Input, Inject, Renderer, ElementRef} from 'angular2/core'
import {DefaultValueAccessor, NgControl, Control} from 'angular2/common'
import {HasPage, HAS_PAGE_TOKEN} from '../interface/haspage.interface'
import {Page} from '../interface/page.interface'
import {QueryDirective} from '../directive/query.directive'
import {Observable} from 'rxjs/Rx'

@Component({
    selector: 'entitySearch',
    template: `
        <input query type="text" [ngFormControl]="term" (blur)="results=[]" (focus)="search()">
        <ul>
            <li *ngFor="#res of results" (click)="select(res)">{{res.name}}</li>
        </ul>
    `,
    directives: [QueryDirective]
})
export class EntitySearchComponent extends DefaultValueAccessor {
    @Input() omitEmpty:boolean = false;
    
    results:any[];
    term = new Control();
    
    constructor(@Inject(HAS_PAGE_TOKEN) protected services:HasPage<any>[], @Optional() ngControl: NgControl, renderer: Renderer, private el: ElementRef) {
        super(renderer, el);
        if(ngControl) ngControl.valueAccessor = this;
    }
    
    ngOnInit() {
        var o:Observable<string> = this.term.valueChanges;
        
        if(this.omitEmpty) {
            o = o.filter(val => val?true:false);
        } 
        
        o.switchMap(val => this.services[0].getPage(0, 20))
            .subscribe((val:Page<any>) => this.results = val.content);
    }
    
    search() {
        this.term.updateValue(this.term.value);
    }
    
    select(item) {
        this.onChange(item);
        this.term.updateValue(item.name);
    }
        
}