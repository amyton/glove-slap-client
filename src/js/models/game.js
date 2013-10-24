(function () {

  //MODEL
  window.Profile = Backbone.Model.extend({
    defaults: {
      UserName: 'Bob',
      Rank: 'n00b',
      Stats: 'n/a',
      Address: '4700 W Guadalupe Apt 351',
      Fears: 'Spiders, dirt, uncertainty, nanobots'
    }
  });

  //COLLECTION
  window.Profiles = Backbone.Collection.extend({
    model: Profile
  });

})();