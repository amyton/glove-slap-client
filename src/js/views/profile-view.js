// generates profile view for profile page

(function () {

  //Profile View
  window.ProfileView = Backbone.View.extend({

    className: 'profile row',

    events: {
      'click button.slap': 'slap'
    },
    slap: function (e) {
      console.log("slap button: werks", this.model.attributes);
      return;
      $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/api/user/1/slap',
        data: { phone_id: '1235' },
        success: function (data) {
          console.log('GRHild Slaps', data);
        }
      });
    },

    initialize: function(options) {
      console.log('I\'m working');
      this.type = options.type;
      this.listenTo(this.model, 'change', this.render);
    },

    miniTemplate: _.getTemplate('mini-user-profile'),
    fullTemplate: _.getTemplate('full-user-profile'),

    render: function() {
      console.log('I\'m definitely working.');

      var email = this.model.get('email');
      if (!email) {
        email = '';
      }

      var data = this.model.toJSON();
      data.gravatarUrl = "http://www.gravatar.com/avatar/" + hex_md5(email) + "?s=300";

      if (this.type === 'mini'){
        var userInfoHtml = this.miniTemplate(data);
      }
      else {
        var userInfoHtml = this.fullTemplate(data);
      }
      $(this.el).html(userInfoHtml);
    }

  });

})();

