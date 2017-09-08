const Controller = require('../../lib/controller');
const usersFacade = require('./facade');
const err = require('../../lib/error');

var GoogleAuth = require('google-auth-library');

var googleClientId = '547421798108-tqnbk4i4g5ljbfvat7nr80eope20i6em.apps.googleusercontent.com';
var auth = new GoogleAuth;
var client = new auth.OAuth2(googleClientId, '', '');

class UsersController extends Controller {
    
    verifyToken(req, res, next){
        var body = req.body;
        var token = body['id_token'];  
        
        if (!token){
            return res.status(400).json(err.missingParameter('id_token'));
        }
        
        client.verifyIdToken(token, googleClientId, function(e, login) {
            if (!login){ return res.status(400).json(err.throw('invalid token')); }
            else{ return res.status(200).json(login.getPayload()); }
        });
    }
}

module.exports = new UsersController(usersFacade);