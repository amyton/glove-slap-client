// generates profile view for profile page

(function () {

  //Profile View
  window.ProfileView = Backbone.View.extend({

    className: 'profile row',

    initialize: function(options) {
      console.log('I\'m working');
      this.type = options.type;
    },

    miniTemplate: _.getTemplate('mini-user-profile'),
    fullTemplate: _.getTemplate('full-user-profile'),

    render: function() {
      console.log('I\'m definitely working.');
      if (this.type === 'mini'){
        var userInfoHtml = this.miniTemplate( this.model.toJSON() );
      }
      else {
        var userInfoHtml = this.fullTemplate( this.model.toJSON() );
      }
      $(this.el).html(userInfoHtml);
    }

  });

})();

