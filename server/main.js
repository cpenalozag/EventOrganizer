import { Meteor } from 'meteor/meteor';
import { Inject } from "meteor/meteorhacks:inject-initial";
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
});

// Deny all client-side updates to user documents
Meteor.users.deny({
    update() { return true; }
});

Roles.addUsersToRoles('Bqu9fCjFzMuRoSSQu', ['admin']);