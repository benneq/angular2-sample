import {Injectable} from 'angular2/core'
import {Http} from 'angular2/http'
import {CrudPageService} from '../common/service/crudpage.service'
import {Contact} from './model/contact'

@Injectable()
export class ContactService extends CrudPageService<Contact> {
    
    constructor(http:Http) {
        super(http, "/api/contacts");
    }
    
}