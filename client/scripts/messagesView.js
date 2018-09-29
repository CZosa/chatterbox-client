var MessagesView = {
  //We think this file brings other people's messages to our
  //chatbox
  //<div id="chats"></div>
  
  $chats: $('#chats'),

  initialize: function(successCB, errorCB = null) {
    //GET - requests specific data
    $.ajax({
    url: Parse.server,
    type: 'GET',
    data: { order: '-createdAt' }, //check this
    contentType: 'application/json',
    success: successCB || function (data) {
        console.log('chatterbox: Messages received!');
      },
    error: errorCB || function(data) {
      console.error('chatterbox: Failed to fetch messages', data)
  }
  })

  },

  render: function(message) {
    var textBox = $('<div class = "chat-box"></div>')
      $('#message').appendTo(textBox);
      $(textBox).appendTo('#chats');
  }
};