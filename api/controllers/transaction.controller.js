const db = require('../models');

module.exports = {

    // CREATE
    createTransaction:  (req, res) => {
        console.log(req.body);
        console.log(db.Transaction.associations)
        const transaction = {
            itemId: req.body.itemId,
            ownerId: req.body.ownerId,
            requestorId: req.body.requestorId
        }
        db.Transaction.create(transaction, {
            include: [
             {
                association: db.Request.associations.Item
            },
            {
                association: db.Request.associations.Requestor
            },
            {
                association: db.Request.associations.Owner
            }
        ]

        })
            .then((dbTransaction) => {
                res.json(dbTransaction);
            });
    },

    // READ
    findOneTransaction: (req, res) => {
        db.Transaction.findOne({
            where: {
                id: req.params.id
            }
        })
            .then((dbTransaction) => {
                res.json(dbTransaction);
            });
    },
    
    // FIND ALL
    findAllTransaction:  (req, res) => {
        const transaction = {
            itemId: req.body.itemId,
            ownerId: req.body.ownerId,
            requestorId: req.body.requestorId
        }
            db.Transaction.findAll(transaction, {
                include: [
                 {
                    association: db.Transaction.associations.Item
                },
                {
                    association: db.Transaction.associations.Requestor
                },
                {
                    association: db.Transaction.associations.Owner
                }
            ]
    
        })
            .then((dbTransaction) => {
                res.json(dbTransaction);
            });
    },

    // UPDATE
    updateTransaction:  (req, res) => {
        db.Transaction.update(req.body,
            {
                where: {
                    id: req.params.id
                }
            })
            .then((dbTransaction) => {
                res.json(dbTransaction);
            });
    },

    // DELETE
    deleteTransaction: (req, res) => {
        db.Transaction.destroy({
            where: {
                id: req.params.id
            }
        })
            .then((dbTransaction) => {
                res.json(dbTransaction)
            });
    }

}; // END EXPORT