const ModelUser = require('../models/m_user');
const ObjectId = require('mongodb').ObjectID;

class ControllerUser {

    static findUser (req,res) {

        Model.User.find()



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
                    message: "Add books success",
                    users: result
                })
            }
        })
    }
}

module.exports = ControllerUser;