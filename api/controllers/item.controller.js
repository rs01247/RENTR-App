const db = require('../models');

module.exports = {

    // CREATE
    createItem: (req, res) => {
        console.log(req.body);
        db.Item.create(
            req.body
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
        db.Item.findAll({})
            .then((dbItem) => {
                res.json(dbItem);
            });
    },

    //FIND ALL ITEM BY USER
    findItemByUser: (req, res) => {
        const item = {
            itemId: req.body.itemId,
            ownerId: req.body.ownerId
        }
        db.Item.findAll(item, {
            include: [
                {
                    association: db.Item.associations.User
                }
            ]
        });
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