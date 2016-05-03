import {RouteParams} from '@angular/router-deprecated';
import {HasItem} from '../interface/hasitem.interface';



export abstract class ItemComponent<T, S extends HasItem<T>> {
    id:string;
    model:T;
    
    constructor(protected service:S, protected params:RouteParams) {
        this.id = params.params['id'];
        this.load();
    }
    
    load(): void {
        this.service.get(this.id).subscribe(
            val => this.model = val,
            err => console.log("err")
        );
    }
    
}