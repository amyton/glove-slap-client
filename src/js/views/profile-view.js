(function () {

  //Profile View
  window.ProfileView = Backbone.View.extend({

    initialize: function (options) {
    },

    render: function() {
      var view = new ProfileView({ model: user });
      this.$('.userInfo').append(view.render().el);
    }

  });

});();