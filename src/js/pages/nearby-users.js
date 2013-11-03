$(document).ready(function (argument) {

  var user = new Profile({
  });

  window.users = new Profiles();

  var profileListView = new ProfileListView({
    collection: users,
    el: '.profiles'
  });

  window.pubsub.on('location', function () {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/api/user/location',
      data: {
        phone_id: g.phoneId,
        latitude: g.position.coords.latitude,
        longitude: g.position.coords.longitude
      },
      success: function (response) {
        console.log('success!', response);
        user.set(response.user);
        users.reset();
        users.add(response.nearby_users);
      }
    });
  });

  $('.listProfileInfo').append(profileListView.render());

  profileListView.render();

});
