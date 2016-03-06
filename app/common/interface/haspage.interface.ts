import {Page} from './page.interface'
import {Observable} from 'rxjs/Observable'

export interface HasPage<T> {
    getPage(page:number, size:number): Observable<Page<T>>;
}