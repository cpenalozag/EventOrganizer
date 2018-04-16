import {Mongo} from 'meteor/mongo';
import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";

export const EventsAdmin = new Mongo.Collection('eventsAdmin');

if (Meteor.isServer) {
    Meteor.publish("EventsAdmin", () => {
        return EventsAdmin.find({}, {sort: {createdAt: 1}});
    });
}

Meteor.methods({
    "eventsAdmin.insert"(name, date, location, category, description, type) {
        check(name, String);
        check(date, String);
        check(location, String);
        check(category, String);
        check(description, String);
        check(type, String);

        var loggedInUser = Meteor.user();
        if (!loggedInUser) {
            throw new Meteor.Error(403, "Access denied")
        }
        EventsAdmin.insert({
            name,
            date,
            type,
            location,
            category,
            description,
            createdAt: new Date(),
        })
    },
    "eventsAdmin.remove"(idEvent) {
        check(idEvent, String);
        EventsAdmin.remove({_id:idEvent});
    }
});
