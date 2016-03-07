import {Page} from './page.interface'
import {Observable} from 'rxjs/Observable'
import {Sort} from './sort.interface'

export interface HasList<T> {
    getList(sort?:Sort[]): Observable<T[]>;
}