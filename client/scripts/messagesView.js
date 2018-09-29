var MessagesView = {
  //We think this file brings other people's messages to our
  //chatbox
  //<div id="chats"></div>
  
  $chats: $('#chats'),

  initialize: function(message, successCB, errorCB = null) {
    //GET - requests specific data
    $.ajax({
    url: Parse.server,
    type: 'GET',
    data: JSON.stringify(message), //check this
    contentType: 'application/json',
    success: successCB || function (data) {
        console.log('chatterbox: Messages received!');
      },
    error: errorCB || function(data) {
      console.error('chatterbox: Failed to fetch messages', data)
  }
  })

  },

  renderMessage: function(message) {
    var textBox = $('<div class = "chat-box"></div>')
      
    $(textBox).appendTo('#chats');
  }
};