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
        /*Camilo Zambrano: Even if you send the idEvent from the UI in a secure way, 
        that doesn't prevent the case of an attack trying to target this method
        and affecting your app just by manipulating the "idEvent" you receive.
        That's why it is important to check everything you receive on your params*/
        check(idEvent, String);

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
