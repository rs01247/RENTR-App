const db = require('../models');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
            })
            .catch((err) => {
                console.error(err);
            })
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
            })
            .catch((err) => {
                console.error(err);
            })
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
        .catch((err) => {
            console.error(err);
        })
    },

    //FIND ALL ITEM BY USER
    findItemByUser: (req, res) => {

        db.Item.findAll({
            where: {
                UserId: req.payload.userID
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
                // if (req.body.isAvailable === false) {
                //     THIS IS WHERE LOGIC TO SEND AN EMAIL OR HIDE DIV WOULD GO
                // }
            })
            .catch((err) => { 
                console.error(err);
            })
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
            })
            .catch((err) => {
                console.error(err);
            })
    }

}; // END EXPORT