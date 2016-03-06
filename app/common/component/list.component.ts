import {HasList} from '../interface/haslist.interface'
import {Page} from '../interface/page.interface'

export abstract class ListComponent<T, S extends HasList<T>> {
    model:T[];
    
    constructor(protected service:S) {
        this.load();
    }
    
    load(): void {
        this.service.getList().subscribe(
            val => this.model = val,
            err => console.log("err")
        );
    }
    
}