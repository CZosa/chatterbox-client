var App = {

  $spinner: $('.spinner img'),

  // url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
  username: 'anonymous',
  roomname: 'lobby',
  // friends: {},


  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // App.$message = $('#message');
    // App.$chats = $('#chats');

    // //Event listeners - these trigger on click 
    // App.$send.on('submit', app.submit);

  },


  // send: function(message) {
  //   app.startSpinner();

  //   //POST the message to the server
  //   $.ajax({
  //     url: App.url,
  //     type: 'POST',
  //     data: message,
  //     success: function(data) {
  //       //Clear all messages
  //       App.$message.val('');
  //       //Fetch to update messages
  //       App.fetch(App.stopSpinner);
  //   },
  //     error: function(error) {
  //       console.log('chatterbox: Failed to send message', error);
  //     }
  //   });
  // },
/*
Things we could have done
Messages.update(data.results) 
//Now that we have our messages we need to render them
MessagesView.render -

*/

//Consider looping through messages array here and prepending to DOM
  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      //We set from the Messages file the messagecollection array to equal data.results
      Messages.messageCollection = data.results;
      // console.log(data);
      // console.log(Messages.messageCollection);
      for (var i = 0; i < Messages.messageCollection.length; i++) {
        if (!Messages.messageCollection[i].username || !Messages.messageCollection[i].roomname || Messages.messageCollection[i].text === undefined) {
          continue;
      } 
        var userMessage = MessagesView.render(message);
        console.log(userMessage);
        $('#chats').prepend(Messages.messageCollection[i])
      }

 
 
      callback();
    });
  },

//   //Check for new messages
//   setInterval(function() {
//     app.fetch();
//   }, 3000);
// },
















  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
