(function () {

window.ProfileListView = Backbone.View.extend({
  className: 'listProfiles',

  initialize: function(options) {
    console.log('Hey!');
    this.listenTo(this.collection, 'add', this.addProfile)
  },

  template: _.getTemplate('userInfo'),

  addProfile: function (profile) {
    var profileView = new ProfileView({ model: profile });
  
    profileView.render();
    $(this.el).append( profileView.el );
  },

  render: function () {
    console.log('Does this work??');
    $(this.el).empty();
    $(this.el).addClass('listProfiles');
    this.collection.each(this.addProfile, this);

    // var userListHtml = this.template(this.collection.toJSON());
    // $(this.el).html(userListHtml);

    // this.collection.each(this.addProfile, this);
  }
  
});


})();