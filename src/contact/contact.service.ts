import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {CrudPageService} from '../common/service/crudpage.service';
import {Contact} from './model/contact';



@Injectable()
export class ContactService extends CrudPageService<Contact> {
    
    constructor(http:Http) {
        super(Contact, http, "/api/contacts");
    }
    
}