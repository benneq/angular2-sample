export class Page<T> {
    content:T[];
    page:Metadata;
    
    static fromJson(obj, contentType): void {
        obj.__proto__ = Page.prototype;
        if(obj.page) Metadata.fromJson(obj.page);
        if(obj.content) obj.content.forEach(e => contentType.fromJson(e));
    }
}

class Metadata {
    size:number;
    number:number;
    total:number;
    elements:number;
    
    static fromJson(obj): void {
        obj.__proto__ = Metadata.prototype;
    }
}