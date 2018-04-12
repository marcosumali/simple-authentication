const ModelUser = require('../models/m_user');
const ObjectId = require('mongodb').ObjectID;

class ControllerUser {

    static findUser (req,res) {
        let username = req.body.username;
        let password = req.body.password;

        ModelUser.findOne({ 'username': username }, function(err, result) {
            if (err) {
                res.status(500).json({
                    message: "Internal service error",
                })
                console.log('Your username are not yet registered !');

            } else {
                res.status(200).json({
                    message: "View user success",
                    user: result
                })
                console.log('You are succesfully login !')
            }
        })
    }


    static addUser(req,res) {
        const newUser = new ModelUser(req.body);

        newUser.save(function(err, result) {
            if (err) {
                res.status(500).json({
                    message: "Internal service error",
                })

            } else {
                res.status(200).json({
                    message: "Add user success",
                    users: result
                })
            }
        })
    }
}

module.exports = ControllerUser;