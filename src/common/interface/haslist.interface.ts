import {Page} from './page.interface';
import {Observable} from 'rxjs/Observable';
import {Sorts} from './sort.interface';



export interface HasList<T> {
    getList(sort?:Sorts, filter?:{}): Observable<T[]>;
}