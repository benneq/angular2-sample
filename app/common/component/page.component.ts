import {RouteParams} from 'angular2/router'
import {HasPage} from '../interface/haspage.interface'
import {Page} from '../interface/page.interface'
import {Sorts} from '../interface/sort.interface'

export abstract class PageComponent<T, S extends HasPage<T>> {
    model:Page<T>;
    
    constructor(protected service:S, protected params:RouteParams, protected page:number=0, protected size:number=20, protected sort:Sorts=[]) {
        if(params.params['page']) this.page = +params.params['page'];
        if(params.params['size']) this.size = +params.params['size'];
        if(params.params['sort']) this.sort = Sorts.fromString(params.params['sort']);
        
        this.load();
    }
    
    load(page?:number): void {
        if(page != undefined) this.page = page;
        
        this.service.getPage(this.page, this.size, this.sort).subscribe(
            val => this.model = val,
            err => console.log("err")
        );
    }
    
    loadNext(): void {
        this.page++;
        this.load();
    }
    
}