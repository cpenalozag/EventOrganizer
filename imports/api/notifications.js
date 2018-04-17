import { Mongo } from 'meteor/mongo';
import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";

export const Notifications = new Mongo.Collection('Notifications');

if(Meteor.isServer){
    Meteor.publish("Notifications", (user) => {
        return Notifications.find({username:user}, {sort: {createdAt: 1}});
    });
}

Meteor.methods({
    "Notifications.insert"(type,eventId,username){
        check(type, String);


        Notifications.insert({
            type,
            eventId,
            username,
            createdAt: new Date()
        });
    },
});