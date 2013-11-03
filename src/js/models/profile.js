(function () {

  //MODEL
  window.Profile = Backbone.Model.extend({
    defaults: {
      nickname: '[loading nickname]',
      rank: '[loading rank]',
      stats: 'n/a',
      email: '[loading email]'
    }
  });

  //COLLECTION
  window.Profiles = Backbone.Collection.extend({
    model: Profile
  });

})();