// generates profile view for profile page

(function () {

  //Profile View
  window.ProfileView = Backbone.View.extend({

    className: 'profile row',

    initialize: function(options) {
      console.log('I\'m working');
      this.type = options.type;
      this.listenTo(this.model, 'change', this.render);
    },

    miniTemplate: _.getTemplate('mini-user-profile'),
    fullTemplate: _.getTemplate('full-user-profile'),

    render: function() {
      console.log('I\'m definitely working.');
      var gravatarUrl = 'http://www.gravatar.com/avatar/' + hex_md5('{{ email }}') + '?s=' + 300;
      if (this.type === 'mini'){
        var userInfoHtml = this.miniTemplate( this.model.toJSON() );
      }
      else {
        var data = this.model.toJSON();
        data.gravatarUrl = "http://www.gravatar.com/avatar/" + hex_md5('amyhton@gmail.com') + "?s=300"
        var userInfoHtml = this.fullTemplate(data);
      }
      $(this.el).html(userInfoHtml);
    }

  });

})();

