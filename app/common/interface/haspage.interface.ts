import {Page} from './page.interface'
import {Observable} from 'rxjs/Observable'
import {Sorts} from './sort.interface'

export interface HasPage<T> {
    getPage(page:number, size:number, sort?:Sorts): Observable<Page<T>>;
}