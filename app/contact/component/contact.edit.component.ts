import {Component} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {ContactService} from '../contact.service';

@Component({
    template: `
        CONTACT EDIT COMPONENT
        <div *ngIf="model">
            Name: <input [(ngModel)]="model.name">
            <button (click)="onSave()">Save</button>
        </div>
    `,
    directives: []
})
export class ContactEditComponent {
    
    constructor(service: ContactService) {
        
    }
    
    onSave() {

    }
        
}