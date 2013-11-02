// // Wait for device API libraries to load
//   //
//   document.addEventListener("deviceready", onDeviceReady, false);

//   // device APIs are available
//   //
//   function onDeviceReady() {
//   }  

//   // process the promptation dialog result
//   function onPrompt(results) {
//       alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
//   }

//   // Show a custom prompt dialog
//   //
// // $('#test').on('click', function(){  
//   function showPrompt() {
//     navigator.notification.prompt(
//       'Slapped',            // message
//       onPrompt,             // callback to invoke
//       'Slapped',            // title
//       ['Ok','Exit'],        // buttonLabels
//       'Oh!'                 // defaultText
//     );
//   }
// });



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
        navigator.notification.vibrate(2000);
    }





