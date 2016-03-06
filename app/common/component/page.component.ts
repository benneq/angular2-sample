import {HasPage} from '../interface/haspage.interface'
import {Page} from '../interface/page.interface'

export abstract class PageComponent<T, S extends HasPage<T>> {
    model:Page<T>;
    
    constructor(protected service:S, protected number:number=0, protected size:number=20) {
        this.load();
    }
    
    load(number?:number): void {
        if(number != undefined) this.number = number;
        this.service.getPage(this.number, this.size).subscribe(
            val => this.model = val,
            err => console.log("err")
        );
    }
    
    loadNext(): void {
        this.number++;
        this.load();
    }
    
}