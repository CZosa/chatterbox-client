var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function(successCB, errorCB = null) {
    //GET the rooms listed from the PARSE server
    
    // $.ajax({
    // url: Parse.server,
    // type: 'GET',
    // data: { roomname: '-createdAt' }, //check this
    // contentType: 'application/json',
    // success: successCB || function (data) {
    //     console.log('chatterbox: Correct rooms received!');
    //   },
    // error: errorCB || function(data) {
    //   console.error('chatterbox: Failed to fetch list of rooms', data)
    //   }
    // })
    
  },

  renderRoom: function() {
    
    var newRoom = $('<div class = "new-room"></div>')
    //need something to add to div to be added to #rooms select
    $(newRoom).appendTo('#rooms select');
  }
};
