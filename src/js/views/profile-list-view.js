// generates the collection of profiles for nearby users

(function () {

window.ProfileListView = Backbone.View.extend({

  // 3. When a new view is created, run the initialize function.
  // 4. this, the new instance of ProfileListView listensTo the users collection, sees the 'add' event, runs the addProfile function below.
  initialize: function(options) {
    console.log('Hey!');
    this.listenTo(this.collection, 'add', this.addProfile)
  },

  addProfile: function (profile) {
    var profileView = new ProfileView({ model: profile, type: 'mini' });

    profileView.render();
    $(this.el).append( profileView.el );
  }

});


})();