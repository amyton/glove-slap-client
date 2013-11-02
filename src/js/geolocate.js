app.initialize();

// Wait for device API libraries to load
// Listens for current location of device
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
function onDeviceReady() {
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

// onSuccess Geolocation
//
function onSuccess(position) {
  var element = document.getElementById('geolocation');
    element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                        'Longitude: '          + position.coords.longitude             + '<br />' +
                        'Accuracy: '           + position.coords.accuracy              + '<br />' +
                        'Timestamp: '          + position.timestamp                    + '<br />';
}

// onError Callback receives a PositionError object
//
function onError(error) {
  alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}






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
  var element = document.getElementById('geolocation');
    element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                        'Longitude: ' + position.coords.longitude     + '<br />' +
                        '<hr />'      + element.innerHTML;
}

// onError Callback receives a PositionError object
//
function onError(error) {
  alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}




// // Gives coordinates of user (lat, long etc.)
// document.addEventListener("deviceready", onDeviceReady, false);

// // Cordova is loaded and Ready
// //
// function onDeviceReady() {
//     navigator.geolocation.getCurrentPosition(onSuccess, onError);
// }

// // Display `Position` properties from the geolocation
// //
// function onSuccess(position) {
//     var div = document.getElementById('myDiv');

//     div.innerHTML = 'Latitude: '             + position.coords.latitude  + '<br/>' +
//                     'Longitude: '            + position.coords.longitude + '<br/>' +
//                     'Accuracy: '             + position.coords.accuracy  + '<br/>';
// }

// // Show an alert if there is a problem getting the geolocation
// //
// function onError() {
//     alert('onError!');
// }










