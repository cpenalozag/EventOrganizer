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
    "Notifications.insert"(text,idUser){
        check(text, String);

        //Make sure the user is logged in before inserting a comment
        if(!this.userId){
            throw new Meteor.Error("Not-authorized");
        }

        Notifications.insert({
            text,
            idUser,
            createdAt: new Date()
        });
    },
});