var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  
      $('#rooms button').on('click', function(message) {
      $('#message').prepend('#chats') 
    })
  },

  render: function() {
  }

};
