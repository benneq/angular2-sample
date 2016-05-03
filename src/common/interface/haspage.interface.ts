import {OpaqueToken} from '@angular/core';
import {Page} from './page.interface';
import {Observable} from 'rxjs/Observable';
import {Sorts} from './sort.interface';



export const HAS_PAGE_TOKEN = new OpaqueToken('HasPage');

export interface HasPage<T> {
    getPage(page:number, size:number, sort?:Sorts, filter?:{}): Observable<Page<T>>;
}