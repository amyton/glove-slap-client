// Wait for PhoneGap to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
//
function onDeviceReady() {
    // Empty
}

// Show a custom alert
//
  function showAlert() {
      navigator.notification.alert(
          'You are the winner!',  // message
          'Game Over',            // title
          'Done'                  // buttonName
      );
  }
// Beep three times
//
function playBeep() {
    navigator.notification.beep(3);
}

// Vibrate for 2 seconds
//
function vibrate() {
    navigator.notification.vibrate(5000);
}





