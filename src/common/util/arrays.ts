export class Arrays {
    
    static remove(arr:any[], i:number) {
        arr.splice(i, 1);
    }
    
    static add(arr:any[], i:number, elem:any) {
        arr.splice(i, 0, elem);
    }
    
    static move(arr:any[], from:number, to:number) {
        arr.splice(to, 0, arr.splice(from, 1)[0]);
    }

} 