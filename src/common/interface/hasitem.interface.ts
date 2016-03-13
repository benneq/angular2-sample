import {Observable} from 'rxjs/Observable'

export interface HasItem<T> {
    get(id:string): Observable<T>;
}