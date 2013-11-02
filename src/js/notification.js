// Wait for device API libraries to load
  //
  document.addEventListener("deviceready", onDeviceReady, false);

  // device APIs are available
  //
  function onDeviceReady() {
  }

  // process the promptation dialog result
  function onPrompt(results) {
      alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
  }

  // Show a custom prompt dialog
  //
$('#test').on('click', function(){  
  function showPrompt(notification) {
    navigator.notification.prompt(
      'Slapped',  // message
      onPrompt,                  // callback to invoke
      'Slapped',            // title
      ['Ok','Exit'],             // buttonLabels
      'Oh!'                 // defaultText
    );
  }
});







