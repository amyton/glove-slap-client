(function () {

  //MODEL
  window.Profile = Backbone.Model.extend({
    defaults: {
      UserName: 'GRHild',
      Rank: 'BAMF',
      Stats: 'n/a',
      Address: 'CoolsVille',
      Fears: 'Dirt, Uncertainty and nanobots'
    }
  });

  //COLLECTION
  window.Profiles = Backbone.Collection.extend({
    model: Profile
  });

})();