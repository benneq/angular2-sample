export class Sort {
    
    constructor(public property:string, public direction:Direction) {
        
    }
    
    toString(): string {
        return this.property+","+this.direction;
    }
}

export enum Direction {
    ASC = <any>"ASC",
    DESC = <any>"DESC"
}