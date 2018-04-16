import {Meteor} from 'meteor/meteor';
import {Random} from 'meteor/random';
import faker from 'faker';
import {Comments} from "./comments.js";
import { assert } from 'chai';

if (Meteor.isServer) {
    describe('Comments', () => {
        describe('methods', () => {
            const text = faker.lorem.sentence();
            const idEvent = Random.id();
            const createdAt = new Date();
            let newComment;

            beforeEach(() => {
                Comments.remove({});
                newComment = Comments.insert({
                    text: text,
                    idEvent: idEvent,
                    createdAt: createdAt,
                    user: () => faker.lorem.sentence(),
                });
            });

            it('Insert Comment', () => {
                assert.equal(Comments.find().count(), 1);

            });
        });
    });
};