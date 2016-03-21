import {Component} from 'angular2/core'
import {Control, ControlGroup, FormBuilder} from 'angular2/common'
import {RouteParams, Router, ROUTER_DIRECTIVES, ComponentInstruction} from 'angular2/router'
import {ContactService} from '../contact.service'
import {Contact} from '../model/contact'
import {PageComponent} from '../../common/component/page.component'
import {QueryDirective} from '../../common/directive/query.directive'

@Component({
    template: `
        CONTACT LIST COMPONENT
        <div [ngFormModel]="form">
            Query: <input query type="text" ngControl="q">
        </div>
        
        <div>
            <a [routerLink]="['Create']">New</a>
        </div>
        <div *ngIf="model">
            <div *ngFor="#item of model.content">
                <a [routerLink]="['Show', {id: item.id}]">{{item.name}}</a>
            </div>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES, QueryDirective]
})
export class ContactListComponent extends PageComponent<Contact, ContactService> {
    form:ControlGroup;

    
    
    constructor(service:ContactService, router:Router, params:RouteParams, fb:FormBuilder) {
        super(service, router, params);
        
        this.form = fb.group({
            q: [this.filter['q']]
        });
        
        this.load();
    }
    
    ngOnInit(): void {
        this.form.valueChanges
            .debounceTime(250)
            .subscribe(val => {
                this.filter = val;
                this.setParams();
            });
    }
    
}