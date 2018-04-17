import {Mongo} from 'meteor/mongo';
import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";
import {EventsAdmin} from "./eventsAdmin";

export const HostEvents = new Mongo.Collection('hostEvents');

if (Meteor.isServer) {
    Meteor.publish("HostEvents", (userId) => {
        return HostEvents.find({user: userId}, {sort: {date: 1}});
    });
}


Meteor.methods({
    "hostEvents.insert"(id, name, date, location, category, description, type) {
        check(name, String);
        check(date, String);
        check(location, String);
        check(category, String);
        check(description, String);
        check(type, String);

        if (!this.userId) {
            throw new Meteor.Error("Not-authorized");
        }
        const user = this.userId;
        HostEvents.insert({
            _id:id,
            name,
            date,
            type,
            location,
            category,
            description,
            user
        })

    },
    "hostEvents.remove"(idEvent) {
        check(idEvent, String);
        HostEvents.remove({_id:idEvent});
    }
});
