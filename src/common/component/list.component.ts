import {Router, RouteParams, CanReuse, OnReuse, ComponentInstruction} from 'angular2/router'
import {HasList} from '../interface/haslist.interface'
import {Page} from '../interface/page.interface'
import {Sorts} from '../interface/sort.interface'

export abstract class ListComponent<T, S extends HasList<T>> implements CanReuse, OnReuse {
    sort:Sorts;
    filter:{};
    
    pending:boolean = false;
    model:T[];
    
    
    
    constructor(protected service:S, protected router:Router, protected params:RouteParams, private defaultSort:Sorts=[]) {
        this.parseParams(params.params);
    }
    
    load(): void {
        this.pending = true;
        this.service.getList(this.sort, this.filter).subscribe(
            val => this.model = val,
            err => console.log("err"),
            () => this.pending = false
        );
    }
    
    parseParams(params:{[key:string]:string}): void {
        this.sort = params['sort'] ? Sorts.fromString(params['sort']) : this.defaultSort;
        
        delete params['sort'];
        
        this.filter = {};
        for(let param in params) {
            this.filter[param] = params[param];
        }
    }
    
    setParams(): void {
        var params:{[key:string]:string} = {};
        params['sort'] = this.sort.toString();
        
        for(let param in this.filter) {
            params[param] = this.filter[param];
        }
        
        this.router.navigate(['/Contact/List', params]);
    }
    
    routerCanReuse(next: ComponentInstruction, prev: ComponentInstruction): boolean {
        return next.componentType == prev.componentType;
    }
    
    routerOnReuse(next: ComponentInstruction, prev: ComponentInstruction): void {
        if(next.params != prev.params) {
            this.parseParams(next.params);
            this.load();
        }
    }
    
}