import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";


export const Items = new Mongo.Collection("Items");

if (Meteor.isServer) {
    Meteor.publish("items", function itemsPublication() {
        return Items.find();
    });
}

Meteor.methods({
    "items.insert"(text, idEvent) {
        check(text, String);

        //Make sure the user is logged in before inserting a item
        if (!this.userId) {
            throw new Meteor.Error("Not-authorized");
        }
        let userN = "";
        if (Meteor.user().profile)
            userN = Meteor.user().profile.name;
        else
            userN = Meteor.user().username;

        Items.insert({
            text,
            idEvent,
            username: userN
        });
    },
    'items.remove'(itemId) {
        const item = Items.findOne(itemId);
        if (item.private && item.owner !== this.userId) {
            throw new Meteor.Error('Not-authorized');
        }
        Items.remove(itemId);
    },
    "items.setChecked"(itemId, setChecked) {
        check(itemId, String);
        check(setChecked, Boolean);

        let userN = "";
        if (Meteor.user().profile)
            userN = Meteor.user().profile.name;
        else
            userN = Meteor.user().username;

        Items.update(itemId, {$set: {checked: setChecked, checkedBy: userN}});
    },

    "items.setPrivate"(itemId, setToPrivate) {
        check(setToPrivate, Boolean);

        const item = Items.findOne(itemId);
        if (item.private && item.owner !== this.userId) {
            throw new Meteor.Error('Not-authorized');
        }

        Items.update(itemId, {$set: {private: setToPrivate}});
    },
});