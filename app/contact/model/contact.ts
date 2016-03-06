export class Contact {
    id:string;
    name:string;
    address:Address;
    
    static fromJson(obj): void {
        obj.__proto__ = Contact.prototype;
        if(obj.address) Address.fromJson(obj.address);
    }
}

export class Address {
    street:string;
    
    static fromJson(obj): void {
        obj.__proto__ = Address.prototype;
    }
}