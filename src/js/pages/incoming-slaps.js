$(document).ready(function (argument) {

  window.slaps = new Slaps();

  // 1. Create an instance of ProfileListView: var profileListView
  // 2. All properties within profileListView gets put into (options) in the ProfileListView in profile-list-view.js
  var slapListView = new SlapListView({
    collection: slaps,
    el: '.profiles'
  });

  // !HARDCODE FOR TESTING
  // slaps.add([
  //   {
  //     "challenger": {
  //       "id": 20,
  //       "phone_id": "Amy",
  //       "nickname": "Amy",
  //       "created_at": "2013-11-04T16:30:08.391Z",
  //       "updated_at": "2013-11-06T02:25:46.604Z",
  //       "rank": 1,
  //       "email": "grhild@gmail.com",
  //       "latitude": 30.01,
  //       "longitude": 30.01,
  //       "token": null
  //     },
  //     "target": {
  //       "id": 24,
  //       "phone_id": "Merz",
  //       "nickname": "Merz",
  //       "created_at": "2013-11-06T02:29:41.479Z",
  //       "updated_at": "2013-11-06T02:30:16.799Z",
  //       "rank": null,
  //       "email": "merz@gmail.com",
  //       "latitude": 30.01,
  //       "longitude": 30.01,
  //       "token": null
  //     },
  //     "status": "pending"
  //   }
  // ])
  // ^HARDCODE FOR TESTING

  window.pubsub.on('location', function () {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/api/user/pendingslaps',
      data: {
        phone_id: g.phoneId
      },
      success: function (response) {
        console.log('success!!!!!!!!', response);
        slaps.add(response.incoming_slaps)
        // user.set(response.user);
        // users.reset();
        // users.add(response.nearby_users);
      }
    });
  });

});
