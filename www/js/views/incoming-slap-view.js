// generates incoming-slap view for MY SLAPS page

(function () {

  //Incoming Slap View
  window.IncomingSlapView = Backbone.View.extend({

    className: 'slap row',

    events: {
      'click button.accept': 'accept',
      'click button.reject': 'reject',
    },

    accept: function (e) {
      console.log("accept button: success", this.model.attributes);
      return;
    },

    reject: function (e) {
      console.log("reject button: success", this.model.attributes);
      return;
    },

    initialize: function(options) {
      this.listenTo(this.model, 'change', this.render);
    },

    incomingSlapTemplate: _.getTemplate('pending-slap'),

    render: function() {
      console.log('I\'m definitely working.');

      var data = this.model.toJSON();

      data.gravatarUrl = "http://www.gravatar.com/avatar/" + hex_md5(this.model.get('challenger').email) + "?s=300";

      var userInfoHtml = this.incomingSlapTemplate(data);
      $(this.el).html(userInfoHtml);
    }

  });

})();

