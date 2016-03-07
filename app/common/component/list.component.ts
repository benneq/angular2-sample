import {RouteParams} from 'angular2/router'
import {HasList} from '../interface/haslist.interface'
import {Page} from '../interface/page.interface'
import {Sort} from '../interface/sort.interface'

export abstract class ListComponent<T, S extends HasList<T>> {
    model:T[];
    
    constructor(protected service:S, protected params:RouteParams, protected sort:Sort[]=[]) {
        if(params.params['sort']) this.sort = Sort.parseArray(params.params['sort']);
        
        this.load();
    }
    
    load(): void {
        this.service.getList(this.sort).subscribe(
            val => this.model = val,
            err => console.log("err")
        );
    }
    
}