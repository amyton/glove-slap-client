window.g = {};
window.serverhost = "http://localhost:3000"
//////////////
// PHONE ID //
//////////////

if (window.device) {
  g.phoneId = device.phonegap;
}
else {
  g.phoneId = 'Amy';
}


/////////////////
// GEOLOCATION //
/////////////////

// Wait for device API libraries to load
// Watches and updates current location of device
document.addEventListener("deviceready", onDeviceReady, false);

var watchID = null;

// device APIs are available
//
function onDeviceReady() {
  // Throw an error if no update is received every 30 seconds
  var options = { timeout: 30000 };
  watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
}

// onSuccess Geolocation
//
function onSuccess(position) {
  g.position = position;
  console.log("geolocator:", g.position);
  window.pubsub.trigger('location');

  // var element = document.getElementById('geolocation');
  //   element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
  //                       'Longitude: ' + position.coords.longitude     + '<br />' +
  //                       '<hr />'      + element.innerHTML;
}

// onError Callback receives a PositionError object
//
function onError(error) {
  alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}
