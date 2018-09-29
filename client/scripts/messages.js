/*
<input type="text" name="message" id="message"/>

*/
var Messages = {
    //WE'll use this array to collect data.results from the server
    messageCollection = [],

    add: function(message, callback) {
        Messages.messageCollection[message.objectId] = message;
        callback();
    },

    update: function(message) {
        for (var message of messages) {
        Messages.messageCollection[message.objectId] = message;
    }
    callback()
    }
}