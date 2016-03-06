import {Page} from './page.interface'
import {Observable} from 'rxjs/Observable'

export interface HasList<T> {
    getList(): Observable<T[]>;
}