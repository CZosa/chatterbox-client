var MessagesView = {
  //We think this file brings other people's messages to our
  //chatbox
  //<div id="chats"></div>
  
  $chats: $('#chats'),

  initialize: function(message, successCB, errorCB = null) {
    //Initializes in App.js
  MessagesView.$chats.on('click', '.username', MessagesView.handleClick)

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
    for (var i = 0; i < Messages.messageCollection.length; i++) {
      //Keep looping till we find values that are working
      if (!Messages.messageCollection[i].username || !Messages.messageCollection[i].roomname || Messages.messageCollection[i].text === undefined) {
        continue;
      } 
      //If those are defined, then we call this method to render the message on our DOM
      MessagesView.renderMessage(Messages.messageCollection[i])
      console.log(Messages.messageCollection[i])
    }

  },
  

  renderMessage: function(message) {
    //input message object into this function to display in DOM

    //combines template with message object
    var userMessage = MessagesView.render(message);
    //inserts message into DOM
    MessagesView.$chats.append(userMessage);
},


  handleClick: function(event) {
    //get username from data attribute
    var username = $(event.target).data('username');
    if (username === undefined) {
      return;
    }
    
  }


};



//Look into underscore chain method