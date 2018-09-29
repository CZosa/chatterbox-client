var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    
    var message = {
      room: 'lobby',
      text: FormView.$form.find('#message').val(),
      username: App.username
    };
    //need to parse above message
    Parse.create(message, () => {
      Message.add(message);
      MessagesView.render;

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
}

};