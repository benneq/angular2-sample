import {Http} from 'angular2/http'
import {Observable} from 'rxjs/Observable'
import {Page} from '../interface/page.interface'
import 'rxjs/Rx'

export class CrudPageService<T> {
    
    constructor(protected http:Http, protected baseUrl:string) {
        
    }
    
    create(item:T): Observable<String> {
        return this.http
            .post(this.baseUrl + ".json", JSON.stringify(item))
            .map(res => "res.url");
    }
    
    get(id:string): Observable<T> {
        return this.http
            .get(this.baseUrl + "/" + id + ".json")
            .map(res => res.json());
    }
    
    getPage(number:number, size:number): Observable<Page<T>> {
        return this.http
            .get(this.baseUrl + ".json")
            .map(res => res.json());
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
    
}