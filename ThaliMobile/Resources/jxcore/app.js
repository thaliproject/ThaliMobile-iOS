
(function () {
  // Logs in Cordova.
  function logInCordova(text) {
    cordova('logInCordova').call(text);
  };

  logInCordova('ThaliMobile app.js loaded');
  
  cordova('StartCommunications').callNative(function() {
    logInCordova('StartCommunications was called');
  });
 
  cordova('getBuffer').registerSync(function () {
    logInCordova("getBuffer is called!!!");
    var buffer = new Buffer(25000);
    buffer.fill(45);

    // send back a buffer
    return buffer;
  });

  cordova('asyncPing').registerAsync(function (message, callback) {
    setTimeout(function () {
      callback("Pong:" + message);
    }, 500);
  });

  cordova('fromJXcore').registerToNative(function (param1, param2) {
    logInCordova("************************** fromJXcore called from Objective-C");
                                       
    // this method is reachable from Java or ObjectiveC
    // OBJ-C : [JXcore callEventCallback:@"fromJXcore" withParams:arr_parms];
    // Java  : jxcore.CallJSMethod("fromJXcore", arr_params);
  });

  // calling this custom native method from JXcoreExtension.m / .java
  cordova('ScreenInfo').callNative(function (width, height) {
    logInCordova("ScreenInfo called! Width " + width + " Height " + height);
  });


  cordova('brianCall').registerToNative(function () {
    logInCordova("%%%%%%%% BRIAN CALLED");
  });


})();
