const Controller = require('../../lib/controller');
const usersFacade = require('./facade');
const err = require('../../lib/error');
const googleUtils = require('../../lib/google-utils');




class UsersController extends Controller {
    
    verifyToken(req, res, next){
        var body = req.body;
        var token = body['id_token'];  
        
        if (!token){
            return res.status(400).json(err.missingParameter('id_token'));
        }

        googleUtils.verifyToken(token, payload => {
            
            if (!payload){
                return res.status(200).json({ token_valid: false });
            } 

            else if (!payload['sub']){
                return res.status(200).json({ token_valid: false });
            }
            
            else {
                var userid = payload['sub'];

                    usersFacade.findOne({ 'google_id': userid }).then(user => {
                        
                        // user doesn't exist
                        if (!user){
                            
                            // create user
                            usersFacade.create({
                                google_id: payload['sub'],
                                name: payload['name'],
                                first_name: payload['given_name'],
                                last_name: payload['family_name'],
                                picture: payload['picture'],
                                email: payload['email']
                            }).then(u => {
                                return res.status(200).json({
                                    token_valid: true,
                                    new_user: true,
                                    user: u
                                });
                            }).catch(e => {
                                return res.status(500).json(err.throw(e.message, 500, e));
                            });
                        }
    
                        // user exist, return user
                        else {
                            return res.status(200).json({
                                token_valid: true,
                                new_user: false,
                                profile: user
                            });
                        }
                        
                    }).catch(err => {
                        console.log('user request error');
                        console.log(err); 
                    });

            }
        });

    }
}

module.exports = new UsersController(usersFacade);