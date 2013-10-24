var user = new Profile({
});

var users = new Profiles({
});

var profile = new ProfileView({
  model: user
});

$('.userInfo').append(profile.el);

profile.render();