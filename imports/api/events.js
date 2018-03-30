import { Mongo } from 'meteor/mongo';
import {SimpleSchema} from "simpl-schema/dist/SimpleSchema";


export const Events = new Mongo.Collection('events');


/*let EventsSchema = new SimpleSchema({
    'name':{
        type:String,
        label:"Name of the event"
    },
    "date":{
        type: Date,
        label: "Date of the event"
    },
    "location":{
        type: String,
        label:"Location of the event"
    },
    "category":{
        type: String,
        label:"Category of the event"
    },
    "description":{
        type: String,
        label:"Description of the event"
    },
    "image_url":{
        type:String,
        label:"Image of the event"
    }
});

Events.attachSchema(EventsSchema)*/
