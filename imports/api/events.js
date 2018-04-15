import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from "simpl-schema/dist/SimpleSchema";
import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";

export const Events = new Mongo.Collection('events');

if (Meteor.isServer) {
    Meteor.publish("Events", (limit, startAt) => {
        new SimpleSchema({
            limit: {type: Number},
            startAt: {type: Date}
        }).validate({limit, startAt});
        return Events.find({createdAt: {$lte: startAt}}, {sort: {date: 1}, limit: limit});
    });
    Meteor.publish("AllEvents", () => {
        return Events.find({});
    });
}


Meteor.methods({
    "events.insert"(name, date, location, category, description, type) {
        check(name, String);
        check(date, String);
        check(location, String);
        check(category, String);
        check(description, String);
        check(type, String);

        if (!this.userId) {
            throw new Meteor.Error("Not-authorized");
        }
        Events.insert({
            name,
            date,
            type,
            location,
            category,
            description,
            createdAt: new Date(),
        })

    },
});
