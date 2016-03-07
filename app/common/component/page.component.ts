import {HasPage} from '../interface/haspage.interface'
import {Page} from '../interface/page.interface'
import {Sort} from '../interface/sort.interface'

export abstract class PageComponent<T, S extends HasPage<T>> {
    model:Page<T>;
    
    constructor(protected service:S, protected page:number=0, protected size:number=20, protected sort:Sort[]=[]) {
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