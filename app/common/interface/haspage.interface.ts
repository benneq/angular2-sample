import {Page} from './page.interface'
import {Observable} from 'rxjs/Observable'
import {Sort} from './sort.interface'

export interface HasPage<T> {
    getPage(page:number, size:number, sort?:Sort[]): Observable<Page<T>>;
}