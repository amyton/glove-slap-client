(function () {

  // var userInfoHtml = $('#templates .userInfo').html();
  // var userInfo = _.template(userInfoHtml);

  //Profile View
  window.ProfileView = Backbone.View.extend({
    template: _.gettemplate('userInfo')

    initialize: function (options) {
    },

    render: function() {
      var userInfoHtml = userInfoTemplate( this.model.toJSON() );
      $(this.el).html(userInfoHtml);

      // this.$('.userInfo').append(view.render().el);
      

    }

  });

});();