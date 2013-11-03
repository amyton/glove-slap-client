// generates the collection of profiles for nearby users

(function () {

window.ProfileListView = Backbone.View.extend({

  initialize: function(options) {
    console.log('Hey!');
    this.listenTo(this.collection, 'add', this.addProfile)
  },

  addProfile: function (profile) {
    var profileView = new ProfileView({ model: profile, type: 'mini' });

    profileView.render();
    $(this.el).append( profileView.el );
  },

  render: function () {
    console.log('Does this work??');
    $(this.el).empty();
    $(this.el).addClass('listProfileInfo');
    this.collection.each(this.addProfile, this);
  }



});


})();