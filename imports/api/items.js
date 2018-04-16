import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";


export const Items = new Mongo.Collection("Items");

if(Meteor.isServer){
    Meteor.publish("items", function itemsPublication(){
        return Items.find();
    });
}

Meteor.methods({
    "items.insert"(text,idEvent){
        check(text, String);

        //Make sure the user is logged in before inserting a item
        if(!this.userId){
            throw new Meteor.Error("Not-authorized");
        }

        Items.insert({
            text,
            idEvent,
            username:Meteor.users.findOne(this.userId).username,
        });
    },
    'items.remove'(itemId){
        const item = Items.findOne(itemId);
        if(item.private && item.owner !== this.userId){
            throw new Meteor.Error('Not-authorized');
        }
        Items.remove(itemId);
    },
    "items.setChecked"(itemId, setChecked){
        check(itemId, String);
        check(setChecked, Boolean);

        Items.update(itemId, {$set:{checked:setChecked}});
    },

    "items.setPrivate"(itemId,setToPrivate){
        check(setToPrivate, Boolean);

        const item = Items.findOne(itemId);
        if(item.private && item.owner !== this.userId){
            throw new Meteor.Error('Not-authorized');
        }

        Items.update(itemId, {$set: {private:setToPrivate } });
    },
});