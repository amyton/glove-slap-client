(function () {

  //MODEL
  window.Profile = Backbone.Model.extend({
    defaults: {
      nickname: 'GRhild',
      Rank: 'BAMF',
      Stats: 'n/a',
    }
  });

  //COLLECTION
  window.Profiles = Backbone.Collection.extend({
    model: Profile
  });

})();