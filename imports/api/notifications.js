import { Mongo } from 'meteor/mongo';
import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";

export const Notifications = new Mongo.Collection('Notifications');

if(Meteor.isServer){
    Meteor.publish("Notifications", (id) => {
        return Notifications.find({userId:id}, {sort: {createdAt: 1}});
    });
}

Meteor.methods({
    "Notifications.insert"(type,eventId,userId){
        check(type, String);


        Notifications.insert({
            type,
            eventId,
            userId,
            createdAt: new Date()
        });
    },
});