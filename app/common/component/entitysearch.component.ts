import {Component, Inject} from 'angular2/core'
import {HasPage, HAS_PAGE_TOKEN} from '../interface/haspage.interface'

@Component({
    selector: 'entitySearch',
    template: `
        <input type="text">
    `,
    directives: []
})
export class EntitySearchComponent {
    
    constructor(@Inject(HAS_PAGE_TOKEN) services:HasPage<any>[]) {
        
    }
        
}