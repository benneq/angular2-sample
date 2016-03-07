export class Sort {
    
    constructor(public property:string, public direction:Direction=Direction.ASC) {
        
    }
    
    toString(): string {
        return this.property+","+this.direction;
    }
    
    static parse(term:string): Sort {
        let arr = term.split(",");
        return new Sort(arr[0], Direction[arr[1]]);
    }
    
    static parseArray(term:string): Sort[] {
        return term.match(/[^,]+,[^,]+/g)
            .map(this.parse)
    }
}

export enum Direction {
    ASC = <any>"ASC",
    DESC = <any>"DESC"
}