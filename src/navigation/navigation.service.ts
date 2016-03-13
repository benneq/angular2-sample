import {Injectable} from 'angular2/core'
import {Http} from 'angular2/http'

@Injectable()
export class NavigationService {
    
    constructor(protected http:Http) {
        
    }
    
    get() {
        return this.http
            .get("/api/settings/navigation.json")
            .map(res => res.json());
    }
    
}