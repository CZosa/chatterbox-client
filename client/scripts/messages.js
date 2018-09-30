/*
<input type="text" name="message" id="message"/>

*/
var Messages = {
    //WE'll use this array to collect data.results from the server

    //use : instead of = because it's a key value pair (THIS IS AN OBJECT)
    messageCollection: [],
    

    add: function(message, callback) {
        Messages.messageCollection[message.objectId] = message;
        console.log(messageCollection)
        callback();
    },

    update: function(message) {
        for (var message of messages) {
        Messages.messageCollection[message.objectId] = message;
    }
    callback()
    }
}


//Need to use _conform to make sure messages match our format (may have been accomplished by for loop earlier)
