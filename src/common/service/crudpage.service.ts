import {Http, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Page} from '../interface/page.interface';
import {Direction,Sorts} from '../interface/sort.interface';
import 'rxjs/Rx';



export abstract class CrudPageService<T> {
    
    constructor(protected type, protected http:Http, protected baseUrl:string) {
        
    }
    
    create(item:T): Observable<String> {
        return this.http
            .post(this.baseUrl + ".json", JSON.stringify(item))
            .map(res => "res.url");
    }
    
    get(id:string): Observable<T> {
        return this.http
            .get(this.baseUrl + "/" + id + ".json")
            .map(res => res.json())
            .map(val => this.fromJson(val));
    }
    
    getPage(page:number, size:number, sort:Sorts=[], filter:{}={}): Observable<Page<T>> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('page', page.toString());
        params.set('size', size.toString());
        sort.forEach(e => params.append('sort', e.toString()));
        Object.keys(filter).forEach(key => params.append(key, filter[key]));
        
        return this.http
            .get(this.baseUrl + ".json", { search: params })
            .map(res => res.json())
            .map(val => this.pageFromJson(val));
    }
    
    update(id:string, item:T): Observable<any> {
        return this.http
            .patch(this.baseUrl + "/" + id + ".json", JSON.stringify(item))
            .map(res => res);
    }
    
    delete(id:string): Observable<any> {
        return this.http
            .delete(this.baseUrl + "/" + id + ".json")
            .map(res => res);
    }
    
    
    
    fromJson(obj:T): T {
        this.type.fromJson(obj);
        return obj;
    }
    
    private pageFromJson(obj:Page<T>): Page<T> {
        Page.fromJson(obj, this.type);
        return obj;
    }
    
}