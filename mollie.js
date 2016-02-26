Accounts.oauth.registerService('mollie');
if (Meteor.isClient) {
  Meteor.loginWithMollie = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Mollie.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.mollie'],
    forOtherUsers: ['services.mollie.id']
  });
}