import {Injectable} from '@angular/core';
import {Http} from '@angular/http';



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