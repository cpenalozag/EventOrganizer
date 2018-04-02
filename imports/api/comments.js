import { Mongo } from 'meteor/mongo';
import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";

export const Comments = new Mongo.Collection('Comments');

if(Meteor.isServer){
    Meteor.publish("Comments", function commentsPublication(){
        return Comments.find();
    });
}


Meteor.methods({
    "Comments.insert"(text,idEvent){
        check(text, String);

        //Make sure the user is logged in before inserting a comment
        if(!this.userId){
            throw new Meteor.Error("Not-authorized");
        }

        Comments.insert({
            text,
            idEvent,
            createdAt: new Date(),
            username: Meteor.users.findOne(this.userId).username,
        });
    },
});