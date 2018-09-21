const db = require('../models');

module.exports = {

    // CREATE
    createTransaction:  (req, res) => {
        console.log(req.body);
        db.Transaction.create(
            req.body
        )
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
        db.Transaction.findAll({})
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