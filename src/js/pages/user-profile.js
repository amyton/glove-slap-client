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

  var gravatarEmailTemplateHtml = $('#templates .gravatar-email').html();
  var gravatarEmailTemplate = _.template(gravatarEmailTemplateHtml);

  window.pubsub.on('location', function () {
    $.ajax({
      type: 'POST',
      url: serverhost + '/api/user/location',
      data: {
        phone_id: g.phoneId,
        latitude: g.position.coords.latitude,
        longitude: g.position.coords.longitude
      },
      success: function (response) {
        console.log('success!', response);
        console.log('user email:', response.user.email);
        user.set(response.user);
        if (!response.user.email) {
          var htmlString = gravatarEmailTemplate({ id: response.user.id });
          console.log("html:", htmlString);
          $('#myModal').html(htmlString);
          $('#myModal').foundation('reveal', 'open');

          $('#myModal form').on('ajax:success', function (data) {
            $('#myModal').foundation('reveal', 'close');
            window.location.reload();
          });
        };
      }
    });
  });

});