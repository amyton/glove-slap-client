(function () {

  //MODEL
  window.Profile = Backbone.Model.extend({
    defaults: {
      nickname: 'GRHild',
      Rank: 'BAMF',
      Stats: 'n/a',
      Address: 'CoolsVille',
      Fears: 'Dirt, Uncertainty'
    }
  });

  //COLLECTION
  window.Profiles = Backbone.Collection.extend({
    model: Profile
  });

})();