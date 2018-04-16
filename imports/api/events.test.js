import {Meteor} from 'meteor/meteor';
import {Random} from 'meteor/random';
import faker from 'faker';
import {Events} from "./events.js";
import { assert } from 'chai';

if (Meteor.isServer) {
    describe('Events', () => {
        describe('methods', () => {
            const name = faker.lorem.sentence();
            const date = new Date();
            const location = faker.lorem.sentence();
            const category = faker.lorem.sentence();
            const description = faker.lorem.sentence();
            const type = faker.lorem.sentence();
            const id = Random.id();
            let newEvent;

            beforeEach(() => {
                Events.remove({});
                newEvent = Events.insert({
                    _id:id,
                    name,
                    date,
                    type,
                    location,
                    category,
                    description,
                    createdAt: new Date(),
                });
            });

            it('Insert Event', () => {
                assert.equal(Events.find({}).count(), 1);

            });
        });
    });
};