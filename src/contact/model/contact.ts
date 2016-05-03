import {Arrays} from '../../common/util/arrays';



export class Contact {
    id:string = null;
    name:string = "";
    company:Contact = null;
    addresses:Address[] = [];
    
    removeAddress(i:number) {
        Arrays.remove(this.addresses, i);
    }
    
    addAddress(i:number=this.addresses.length, address?:Address):void {
        Arrays.add(this.addresses, i, address || new Address());
    }
    
    moveAddress(from:number, to:number) {
        Arrays.move(this.addresses, from, to);
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