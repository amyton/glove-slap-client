(function () {

window.ProfileListView = Backbone.View.extend({
  className: 'listProfiles',


  initialize: function(options) {
    this.listenTo(this.collection, 'add', this.addProfile);
  },

  template: _.getTemplate('userInfo'),

  addProfile: function (profile) {
    profile.view = new ProfileView({ model: profile });
  
    task.view.render();
    $(this.el).append( profile.view.el );
  },

  render: function () {
    var userListHtml = this.template(this.model.toJSON());
    $(this.el).html(userListHtml);

    this.collection.each(this.addProfile, this);
  }
  
});


})();