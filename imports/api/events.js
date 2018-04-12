import { Mongo } from 'meteor/mongo';
import {SimpleSchema} from "simpl-schema/dist/SimpleSchema";
import {Meteor} from "meteor/meteor";
import {Comments} from "./comments";
import {check} from "meteor/check";

export const Events = new Mongo.Collection('events');

if(Meteor.isServer){
    Meteor.publish("Events", (limit, startAt) => {
        new SimpleSchema({
            limit:{type:Number},
            startAt:{type:Date}
        }).validate({limit,startAt});
        return Events.find({createdAt: {$lte: startAt}}, {sort:{date:1}, limit: limit});
    });
}


Meteor.methods({
    "events.insert"(name,date,location,category,description){
        check(name, String);
        check(date, String);
        check(location, String);
        check(category, String);
        check(description, String);

        if(!this.userId){
            throw new Meteor.Error("Not-authorized");
        }

        Events.insert({
            name,
            date,
            location,
            category,
            description,
            createdAt: new Date(),
        })
    },
});

/*let EventsSchema = new SimpleSchema({
    'name':{
        type:String,
        label:"Name of the event"
    },
    "date":{
        type: Date,
        label: "Date of the event"
    },
    "location":{
        type: String,
        label:"Location of the event"
    },
    "category":{
        type: String,
        label:"Category of the event"
    },
    "description":{
        type: String,
        label:"Description of the event"
    },
    "image_url":{
        type:String,
        label:"Image of the event"
    }
});

Events.attachSchema(EventsSchema)*/
