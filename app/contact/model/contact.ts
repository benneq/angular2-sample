export class Contact {
    id:string = null;
    name:string = "";
    addresses:Address[] = [];
    
    removeAddress(i:number) {        
        this.addresses.splice(i, 1);
    }
    
    addAddress(i:number=this.addresses.length, address?:Address):void {
        this.addresses.splice(i, 0, address || new Address());
    }
    
    static fromJson(obj): void {
        obj.__proto__ = Contact.prototype;
        if(obj.addresses) obj.addresses.forEach(val => Address.fromJson(val));
    }
}

export class Address {
    street:string = "";
    
    static fromJson(obj): void {
        obj.__proto__ = Address.prototype;
    }
}