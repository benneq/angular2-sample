export class Sorts extends Array<Sort> {
    
    toString(): string {        
        return this.map(val => val.toString()).join(",");
    }
    
    static fromString(term:string): Sorts {
        let sorts:Sorts = new Sorts();
        term.match(/[^,]+,[^,]+/g).map(Sort.fromString).forEach(val => sorts.push(val));
        return sorts;
    }
    
}

export class Sort {
    
    constructor(public property:string, public direction:Direction=Direction.ASC) {
        
    }
    
    toString(): string {
        return this.property+","+this.direction;
    }
    
    static fromString(term:string): Sort {
        let arr = term.split(",");
        return new Sort(arr[0], Direction[arr[1]]);
    }
    
}

export enum Direction {
    ASC = <any>"ASC",
    DESC = <any>"DESC"
}