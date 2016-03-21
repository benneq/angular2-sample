import {Router, RouteParams, CanReuse, OnReuse, ComponentInstruction} from 'angular2/router'
import {HasPage} from '../interface/haspage.interface'
import {Page} from '../interface/page.interface'
import {Sorts} from '../interface/sort.interface'

export abstract class PageComponent<T, S extends HasPage<T>> implements CanReuse, OnReuse {
    page:number;
    size:number;
    sort:Sorts;
    filter:{};
    
    pending:boolean = false;
    model:Page<T>;
    
    
    
    constructor(protected service:S, protected router:Router, protected params:RouteParams, private defaultPage:number=0, private defaultSize:number=20, private defaultSort:Sorts=[]) {
        this.parseParams(params.params);
    }
    
    load(): void {
        this.pending = true;
        this.service.getPage(this.page, this.size, this.sort, this.filter).subscribe(
            val => this.model = val,
            err => console.log("err"),
            () => this.pending = false
        );
    }
    
    loadNext(): void {
        this.page++;
        this.setParams();
    }
    
    parseParams(params:{[key:string]:string}): void {
        this.page = params['page'] ? +params['page'] : this.defaultPage;
        this.size = params['size'] ? +params['size'] : this.defaultSize;
        this.sort = params['sort'] ? Sorts.fromString(params['sort']) : this.defaultSort;
        
        delete params['page'];
        delete params['size'];
        delete params['sort'];
        
        this.filter = {};
        for(let param in params) {
            this.filter[param] = params[param];
        }
    }
    
    setParams(): void {
        var params:{[key:string]:string} = {};
        params['page'] = this.page.toString();
        params['size'] = this.size.toString();
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