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
    /*Camilo Zambrano: do not directly write the enviroment variables into your code, this is bad for security reasons
    thanks to your repo being public. Remeber to use the env variables on Heroku or using a .env file that you never push
    if that is also something you need*/
    process.env.MAIL_URL="smtps://postmaster%40sandbox4537ad8100634307a8194ad2fda0381e.mailgun.org:21d08359dc71e870afd40c6dc2ed6d57-4497bd1d-a1a769ce@smtp.mailgun.org:587";
    
});


// Deny all client-side updates to user documents
Meteor.users.deny({
    update() { return true; }
});


// Define a rule to limit comment insertion rate
const commentInsertRule = {
    type: 'method',
    name: 'Comments.insert'
};

// Add the rule, allowing 1 comment every 3000 milliseconds.
DDPRateLimiter.addRule(commentInsertRule, 1, 3000);

// Define a rule to limit item insertion rate
const itemInsertRule = {
    type: 'method',
    name: 'items.insert'
};

// Add the rule, allowing 1 item every 3000 milliseconds.
DDPRateLimiter.addRule(itemInsertRule, 1, 3000);
