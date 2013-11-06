// generates the collection slaps for current user

(function () {

window.SlapListView = Backbone.View.extend({

  // 3. When a new view is created, run the initialize function.
  // 4. this, the new instance of ProfileListView listensTo the users collection, sees the 'add' event, runs the addSlap function below.
  initialize: function(options) {
    this.listenTo(this.collection, 'add', this.addSlap)
  },

  addSlap: function (slap) {
    var slapView = new IncomingSlapView({ model: slap });

    slapView.render();
    $(this.el).append( slapView.el );
  }

});


})();