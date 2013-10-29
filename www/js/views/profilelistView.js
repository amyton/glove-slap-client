(function () {

window.ProfileListView = Backbone.View.extend({
  className: 'listProfiles',


  initialize: function(options) {
    console.log('ProfileListView is initiated!');
  },

  template: _.getTemplate('profilelist'),

  render: function () {
    var userListHtml = this.template(this.model.toJSON());
    $(this.el).html(userListHtml);

  }
  
});


})();