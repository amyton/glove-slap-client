(function () {

  //MODEL
  window.Profile = Backbone.Model.extend({
    defaults: {
      nickname: 'GRhild',
      Rank: 'BAMF',
      Stats: 'n/a',
      email: ''
    }
  });

  //COLLECTION
  window.Profiles = Backbone.Collection.extend({
    model: Profile
  });

})();