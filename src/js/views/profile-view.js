// generates profile view for profile page

(function () {

  //Profile View
  window.ProfileView = Backbone.View.extend({

    className: 'profile row',

    initialize: function(options) {
      console.log('I\'m working');
    },

    template: _.getTemplate('userInfo'),

    render: function() {
      console.log('I\'m definitely working.');
      var userInfoHtml = this.template( this.model.toJSON() );
      $(this.el).html(userInfoHtml);
    }

  });

})();

