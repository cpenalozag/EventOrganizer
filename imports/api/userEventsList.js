import { Mongo } from 'meteor/mongo';
import {SimpleSchema} from "simpl-schema/dist/SimpleSchema";


export const userEventsList = new Mongo.Collection('listEvents');


/*const schema3 = new SimpleSchema({
    "EventsId": String,
});
let userEventsListSchema = new SimpleSchema({
    "_idUser":{
        type:String,
        label:"id of the logged user"
    },
    "_ListEventsId":{
        type: Array,
        label: "List of id of events"
    },
    '_ListEventsId.$': schema3,
});



userEventsList.attachSchema(userEventsListSchema)*/