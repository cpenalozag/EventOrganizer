import {Meteor} from 'meteor/meteor';
import {Random} from 'meteor/random';
import faker from 'faker';
import {Items} from "./items.js";
import { assert } from 'chai';

if (Meteor.isServer) {
    describe('Items', () => {
        describe('methods', () => {
            const text = faker.lorem.sentence();
            const idEvent = Random.id();
            const user = faker.lorem.sentence();
            let newItem;

            beforeEach(() => {
                Items.remove({});
                newItem = Items.insert({
                    text: text,
                    idEvent: idEvent,
                    userN : user
                });
            });

            it('Insert Item', () => {
                assert.equal(Items.find({}).count(), 1);

            });
        });
    });
};
