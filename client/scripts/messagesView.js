var MessagesView = {
  //We think this file brings other people's messages to our
  //chatbox
  //<div id="chats"></div>
  
  $chats: $('#chats'),

  initialize: function(message, successCB, errorCB = null) {
    //Initializes in App.js


  },


  /*
_each(Messages, (message) => {

  var $message = MessageView.render(message);
  //now we need to append this to DOM
  MessagesView.$chats.append($message)
}

_.template - Template is a handy way to inject an html template
  */
  render: function() {


    //we'll loop through our collection to make sure the values are NOT undefined
    for (var i = 0; i < Message.messageCollection.length; i++) {
      //Keep looping till we find values that are working
      if (!Message.messageCollection[i].username || !Message.messageCollection[i].roomname || Message.messageCollection[i].text === undefined) {
        continue;
      } 
      //If those are defined, then we call this method to render the message on our DOM
      MessagesView.renderMessage(Message.messageCollection[i])
      console.log(Message.messageCollection)
    }
    _each(Messages, (message) => {

      var $message = messageCollection.render(message);
      //now we need to append this to DOM
      MessagesView.$chats.append($message)
    });
  },
  

  renderMessage: function(message) {
    //input message object into this function to display in DOM

    //combines template with message object
    var userMessage = MessagesView.render(message);
    //inserts message into DOM
    MessagesView.$chats.append(userMessage);
}
};



//Look into underscore chain method