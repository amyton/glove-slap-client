(function () {

  //Profile View
  window.ProfileView = Backbone.View.extend({
    template: _.gettemplate('userInfo')

    initialize: function (options) {
    },

    render: function() {
      var view = new ProfileView({ model: user });
      this.$('.userInfo').append(view.render().el);
    }

  });

});();

 var userInfoHtml = $('#templates .userInfo').html();
 var userInfo = _.template(userInfoHtml);
