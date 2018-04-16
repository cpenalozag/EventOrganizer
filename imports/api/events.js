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
        return Events.find({createdAt: {$lte: startAt}, type: "Public"}, {sort: {date: 1}, limit: limit});
    });
    Meteor.publish("AllEvents", () => {
        return Events.find({});
    });
}


Meteor.methods({
    "events.insert"(id, name, date, location, category, description, type) {
        check(id, String);
        check(name, String);
        check(date, String);
        check(location, String);
        check(category, String);
        check(description, String);
        check(type, String);

        let loggedInUser = Meteor.user();
        if (!loggedInUser || !Roles.userIsInRole(loggedInUser, ['admin'])) {
            throw new Meteor.Error(403, "Access denied")
        }
        Events.insert({
            _id:id,
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
