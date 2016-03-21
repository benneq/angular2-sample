import {Component} from 'angular2/core'
import {Control, ControlGroup, FormBuilder} from 'angular2/common'
import {RouteParams, Router, ROUTER_DIRECTIVES, ComponentInstruction} from 'angular2/router'
import {ContactService} from '../contact.service'
import {Contact} from '../model/contact'
import {PageComponent} from '../../common/component/page.component'
import {ContactFilterForm} from '../form/contactfilter.form'

@Component({
    template: `
        CONTACT LIST COMPONENT
        <contactFilter [ngFormControl]="filterForm"></contactFilter>
        <div>
            <a [routerLink]="['Create']">New</a>
        </div>
        <div *ngIf="model">
            <div *ngFor="#item of model.content">
                <a [routerLink]="['Show', {id: item.id}]">{{item.name}}</a>
            </div>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES, ContactFilterForm]
})
export class ContactListComponent extends PageComponent<Contact, ContactService> {
    filterForm:Control = new Control();

    
    
    constructor(service:ContactService, router:Router, params:RouteParams, fb:FormBuilder) {
        super(service, router, params);
        this.load();
    }
    
    ngOnInit(): void {
        this.filterForm.valueChanges.subscribe(val => {
            this.filter = val;
            this.setParams();
        });
        
        this.filterForm.updateValue(this.filter, {emitEvent:false});
    }
    
    load() {
        super.load();
        this.filterForm.updateValue(this.filter, {emitEvent:false});
    }
    
}