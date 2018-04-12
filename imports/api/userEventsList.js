import { Mongo } from 'meteor/mongo';
import {SimpleSchema} from "simpl-schema/dist/SimpleSchema";
import {Meteor} from "meteor/meteor";
import {Events} from "./events";


export const userEventsList = new Mongo.Collection('listEvents');

if(Meteor.isServer){
    Meteor.publish("ListEvents", () => {
        return userEventsList.find({});
    });
}

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