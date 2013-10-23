var user = new Profile({
});

var users = new Profiles({
});

var profile = new ProfileView({
  model: user,
  el: '.userInfo'
});

profile.render();

$('.userInfo').append(profile.el);