(function () {

window.ProfileListView = Backbone.View.extend({
  className: 'listProfiles',

  initialize: function(options) {
    console.log('Hey!');
  },

  template: _.getTemplate('userInfo'),

  // addProfile: function (profile) {
  //   profile.view = new ProfileView({ model: profile });
  
  //   profile.view.render();
  //   $(this.el).append( profile.view.el );
  // },

  render: function () {
    var userListHtml = this.template(this.collection.toJSON());
    $(this.el).html(userListHtml);

    // this.collection.each(this.addProfile, this);
  }
  
});


})();