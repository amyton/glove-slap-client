(function () {

  //MODEL
  window.Profile = Backbone.Model.extend({
    defaults: {
      nickname: '',
      Rank: '',
      Stats: 'n/a',
      email: ''
    }
  });

  //COLLECTION
  window.Profiles = Backbone.Collection.extend({
    model: Profile
  });

})();