import { Meteor } from 'meteor/meteor';
import { Inject } from "meteor/meteorhacks:inject-initial";
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter'
import '../imports/api/events.js';
import '../imports/api/hostEvents.js';
import '../imports/api/eventsAdmin.js'
import '../imports/api/items.js';
import '../imports/api/userEventsList.js';
import '../imports/api/comments.js';

Meteor.startup(() => {
  // code to run on server at startup
    Inject.rawModHtml("addLanguage", function(html) {
        return html.replace(/<html>/, '<!-- HTML 5 -->\n<html lang="en">');
    });
    process.env.MAIL_URL="smtp://postmaster%40sandbox4537ad8100634307a8194ad2fda0381e.mailgun.org:21d08359dc71e870afd40c6dc2ed6d57-4497bd1d-a1a769ce@smtp.mailgun.org:587";
    Accounts.config({
        sendVerificationEmail:true
    })
});


// Deny all client-side updates to user documents
Meteor.users.deny({
    update() { return true; }
});

// Define a rule that matches login attempts by non-admin users.
const loginRule = {
    userId(userId) {
        const user = Meteor.users.findOne(userId);
        return user && user.type !== 'admin';
    },

    type: 'method',
    name: 'login'
};

// Add the rule, allowing up to 5 messages every 1000 milliseconds.
DDPRateLimiter.addRule(loginRule, 5, 1000);