(function () {

  // var userInfoHtml = $('#templates .userInfo').html();
  // var userInfo = _.template(userInfoHtml);

  //Profile View
  window.ProfileView = Backbone.View.extend({
    className: 'userInfo',

    template: _.getTemplate('userInfo'),

    render: function() {
      var userInfoHtml = this.template( this.model.toJSON() );
      $(this.el).html(userInfoHtml);
    }

  });


})();

