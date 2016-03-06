export interface Page<T> {
    content:T[];
    page:Metadata;
}

interface Metadata {
    size:number;
    number:number;
    total:number;
    elements:number;
}