import { Mongo } from 'meteor/mongo';
import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";

export const Participants = new Mongo.Collection('Participants');

if(Meteor.isServer){
    Meteor.publish("Participants", (id) => {
        return Participants.find({eventId:id}, {sort: {createdAt: 1}});
    });
}

Meteor.methods({
    "Participants.insert"(eventId,user){
        check(text, eventId);

        Participants.insert({
            eventId,
            user,
            createdAt: new Date()
        });
    },
});