import { Mongo } from 'meteor/mongo';
import {SimpleSchema} from "simpl-schema/dist/SimpleSchema";
import {Meteor} from "meteor/meteor";
import {Events} from "./events";
import {check} from "meteor/check";


export const userEventsList = new Mongo.Collection('listEvents');

if(Meteor.isServer){
    Meteor.publish("ListEvents", (id) => {
        return userEventsList.find({idUser:id});
    });
}

Meteor.methods({
    "listEvents.insert"(list){
        if(!this.userId){
            throw new Meteor.Error("Not-authorized");
        }

        userEventsList.insert(list)
    },
    "listEvents.update"(list){

        if(!this.userId){
            throw new Meteor.Error("Not-authorized");
        }

        userEventsList.update({_id: this.props.userEvents._id}, list, {upsert: false})
    },
});

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