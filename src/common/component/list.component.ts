import {RouteParams} from 'angular2/router'
import {HasList} from '../interface/haslist.interface'
import {Page} from '../interface/page.interface'
import {Sorts} from '../interface/sort.interface'

export abstract class ListComponent<T, S extends HasList<T>> {
    model:T[];
    
    constructor(protected service:S, protected params:RouteParams, protected sort:Sorts=[], protected filter:{}={}) {
        if(params.params['sort']) this.sort = Sorts.fromString(params.params['sort']);
        
        this.load();
    }
    
    load(): void {
        this.service.getList(this.sort, this.filter).subscribe(
            val => this.model = val,
            err => console.log("err")
        );
    }
    
}