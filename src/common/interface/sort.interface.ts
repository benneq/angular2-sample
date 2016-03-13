export class Sorts extends Array<Sort> {
    
    constructor(sorts:Sort[]) {
        super();
        this.push(...sorts);
    }
    
    toString(): string {        
        return this.map(val => val.toString()).join(",");
    }
    
    static fromString(term:string): Sorts {
        return new Sorts(term.match(/[^,]+,[^,]+/g).map(Sort.fromString));
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