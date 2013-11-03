$(document).ready(function (argument) {

  var user = new Profile({
  });

  var profileView = new ProfileView({
    model: user,
    type: 'full'
  });

  console.log('User:', user);

  $('.user-profile').append(profileView.el);

  profileView.render();

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
      }
    });
  });

});