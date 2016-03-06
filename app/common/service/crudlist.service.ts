import {Http} from 'angular2/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/Rx'

export abstract class CrudListService<T> {
    
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
    
    getList(): Observable<T[]> {
        return this.http
            .get(this.baseUrl + ".json")
            .map(res => res.json())
            .map(val => this.listFromJson(val));
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
    
    private listFromJson(obj:T[]): T[] {
        obj.forEach(e => this.fromJson(e));
        return obj;
    }
    
}