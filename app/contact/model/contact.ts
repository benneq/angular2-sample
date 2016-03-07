export class Contact {
    id:string = null;
    name:string = "";
    addresses:Address[] = [];
    
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