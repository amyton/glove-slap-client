(function(){

  //MODEL
  window.Profile = Backbone.Model.extend({
    default: {
      'UserName': 'You',
      'Rank': 'n00b',
      'Games Won / Games Played': 'n/a'
    }
  })

  window.Profiles = Backbone.Collection.extend({
    model: Profile

  });
})();