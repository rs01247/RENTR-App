const db = require('../models');

module.exports = {

    // CREATE
    createItem: (req, res) => {
        console.log(req.payload);
        const item = {
            UserId: req.payload.userID,
            itemName: req.body.itemName,
            location: req.body.location,
            description: req.body.description,
            image: req.body.image,
            date: req.body.date,
            isAvailable: req.body.isAvailable
        }

        db.Item.create(
            item
        )
            .then((dbItem) => {
                res.json(dbItem);
            });
    },

    // READ
    findOneItem: (req, res) => {
        db.Item.findOne({
            where: {
                id: req.params.id
            }
        })
            .then((dbItem) => {
                res.json(dbItem);
            });
    },

    // FIND ALL
    findAllItem: (req, res) => {
        console.log(req.query)

        db.Item.findAll({
            where: req.query,
        })
        .then((dbItem) => {
            res.json(dbItem);
        })
    },

    //FIND ALL ITEM BY USER
    findItemByUser: (req, res) => {

        db.Item.findAll({
            where: {
                UserId: req.payload.userId
            },
            includes: [
                { model: db.User }
            ]
        })
            .then((dbItem) => {
                res.json(dbItem);
            })
            .catch((err) => {
                console.error(err);
            })
    },

    // UPDATE
    updateItem: (req, res) => {
        db.Item.update(req.body,
            {
                where: {
                    id: req.params.id
                }
            })
            .then((dbItem) => {
                res.json(dbItem);
            });
    },

    // DELETE
    deleteItem: (req, res) => {
        db.Item.destroy({
            where: {
                id: req.params.id
            }
        })
            .then((dbItem) => {
                res.json(dbItem)
            });
    }

}; // END EXPORT