var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    
    var message = {
      roomname: 'lobby', //Rooms.selected
      text: FormView.$form.find('#message').val(),
      username: App.username
    };

    //need to parse above message
    Parse.create(message, (data) => {
      Message.add(message);
      MessagesView.render;
    });
    },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
};

/*  
  */