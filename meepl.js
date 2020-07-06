setTimeout(function() {
    FisionSDK.initialize({
       apiKey: "de3282aa-137e-4220-83b0-675203f44614"
       // ... other configuration
    }).then(function(fisionSDK) {
       fisionSDK.bodyProfileButton({
        parentElement: document.getElementById('meepl_btn'),
        onBodyProfileReceived: function (bodyFeatures) {
           console.log('Received bodyfeatures:', bodyFeatures);
           document.getElementById("meepl_res").innerHTML = JSON.stringify(bodyFeatures.measurements, null, 2);
        },
        onSignOut: function () {
          console.log('The user has been signed out.');
        }
       });
    });
  }, 2000);
