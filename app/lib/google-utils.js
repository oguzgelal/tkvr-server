var GoogleAuth = require('google-auth-library');
var auth = new GoogleAuth;
var googleClientId = '547421798108-tqnbk4i4g5ljbfvat7nr80eope20i6em.apps.googleusercontent.com';
var client = new auth.OAuth2(googleClientId, '', '');

const err = require('./error');

module.exports = {
    verifyToken: function(token, cb){
        client.verifyIdToken(token, googleClientId, function(e, login) {
            if (!login){ cb(null); }
            else{ cb(login.getPayload()); }
        });
    }
}