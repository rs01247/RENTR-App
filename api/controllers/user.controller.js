const db = require('../models');

module.exports = {

    // CREATE
    createUser:  (req, res) => {
        console.log(req.body);
        db.User.create(
            req.body
        )
            .then((dbUser) => {
                res.json(dbUser);
            });
    },

    // READ
    findOneUser: (req, res) => {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        })
            .then((dbUser) => {
                res.json(dbUser);
            });
    },
    
    // FIND ALL
    findAllUser:  (req, res) => {
        db.User.findAll({})
            .then((dbUser) => {
                res.json(dbUser);
            });
    },

    // UPDATE
    updateUser:  (req, res) => {
        db.User.update(req.body,
            {
                where: {
                    id: req.params.id
                }
            })
            .then((dbUser) => {
                res.json(dbUser);
            });
    },

    // DELETE
    deleteUser: (req, res) => {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        })
            .then((dbUser) => {
                res.json(dbUser)
            });
    }

}; // END EXPORT