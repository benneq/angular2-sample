import {Component, Optional, Input, Inject, Renderer, ElementRef, EventEmitter} from 'angular2/core'
import {DefaultValueAccessor, NgControl, Control, Validators} from 'angular2/common'
import {HasPage, HAS_PAGE_TOKEN} from '../interface/haspage.interface'
import {Page} from '../interface/page.interface'
import {QueryDirective} from '../directive/query.directive'
import {Observable} from 'rxjs/Rx'

@Component({
    selector: 'entitySearch',
    template: `
        <input query type="text" [ngFormControl]="term" (focus)="show()">
        <div *ngIf="pending">PENDING</div>
        <ul *ngIf="!hidden">
            <template [ngIf]="!pending && (!hideOnInvalid || term.valid)">
                <li *ngIf="!results">No Results Found</li>
                <li *ngFor="#res of results" (click)="select(res)">{{format(res)}}</li>
            </template>
        </ul>
    `,
    directives: [QueryDirective]
})
export class EntitySearchComponent extends DefaultValueAccessor {
    @Input() timeout:number = 250;
    @Input() minLength:number = 0;
    @Input() searchOnShow:boolean = false;
    @Input() hideOnSelect:boolean = true;
    @Input() hideOnInvalid:boolean = true;
    
    searchEmitter:EventEmitter<string> = new EventEmitter();
    term:Control = new Control();
    
    pending:boolean = false;
    hidden:boolean = true;
    results:any[] = null;
    
    
    
    constructor(@Inject(HAS_PAGE_TOKEN) protected services:HasPage<any>[], @Optional() ngControl:NgControl, renderer:Renderer, el:ElementRef) {
        super(renderer, el);
        if(ngControl) ngControl.valueAccessor = this;
    }
    
    ngOnInit() : void {
        if(this.minLength > 0) {
            this.term.validator = Validators.compose([
                Validators.required,
                Validators.minLength(this.minLength)
            ]);
        }
        
        this.searchEmitter
            .distinctUntilChanged((x,y) => {
                if(x == y) {
                    this.pending = false;
                    return true;
                } else {
                    this.pending = this.term.valid;
                    return false;
                }
            })
            .switchMap(val => this.term.valid ? this.services[0].getPage(0, 20) : Observable.empty())
            .do(() => this.pending = false)
            .subscribe((val:Page<any>) => this.results = val.content);
        
        this.term.valueChanges
            .do(() => this.pending = this.term.valid)
            .debounceTime(this.timeout)
            .subscribe((val:string) => this.search(val));
    }
    
    writeValue(value:any) : void {
        if(value) {
            this.term.updateValue(this.format(value), {emitEvent:false});
        }
    }
    
    show() : void {
        if(this.results == null || this.searchOnShow) {
            this.search(this.term.value);
        }
        this.hidden = false;
    }
    
    hide() : void {
        this.hidden = true;
    }
    
    search(val:string) : void {
        this.searchEmitter.emit(val);
    }
    
    select(item:any) : void {
        this.onChange(item);
        this.writeValue(item);
        if(this.hideOnSelect) {
            this.hide();
        }
    }
    
    format(item:any) : string {
        return item.name;
    }
        
}