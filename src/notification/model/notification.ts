import {Record, List} from 'immutable';



let NotificationRefRecord = Record({
    type:null,
    id:null
});

export class NotificationRef extends NotificationRefRecord {
    type:string;
    id:string;
    
    constructor(props) {
        super(props);
    }
}



let NotificationRecord = Record({
    id:null,
    createdAt:null,
    content:"",
    read:false,
    refs:List<NotificationRef>()
});

export class Notification extends NotificationRecord {
    id:string;
    createdAt:Date;
    content:string;
    read:boolean;
    refs:List<NotificationRef>;
    
    constructor(props) {
        super(props);
    }
    
}