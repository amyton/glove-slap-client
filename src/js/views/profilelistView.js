(function () {

window.ProfileListView = Backbone.View.extend({
  tagName: 'li',

  template: _.getTemplate('$profilelist'),

  render: function (e) {
    e.preventDefault();
    $(this.el).html(this.template(this.model.toJSON)());
  }
  
});


})();