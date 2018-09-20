const db = require('../models');

module.exports = {

    // CREATE
    createRequest: (req, res) => {
        console.log(req.body);
        console.log(db.Request.associations)
        const request = {
            itemId: req.body.itemId,
            ownerId: req.body.ownerId,
            requestorId: req.body.requestorId
        }
        db.Request.create(request, {
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
            .then((dbRequest) => {
                res.json(dbRequest);
            });
    },

    // READ
    findOneRequest: (req, res) => {
        db.Request.findOne({
            where: {
                id: req.params.id
            }
        })
            .then((dbRequest) => {
                res.json(dbRequest);
            });
    },

    // FIND ALL
    findAllRequest: (req, res) => {
        const request = {
            itemId: req.body.itemId,
            ownerId: req.body.ownerId,
            requestorId: req.body.requestorId
        }
            db.Request.findAll(request, {
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
            .then((dbRequest) => {
                res.json(dbRequest);
            });
    },

    // UPDATE
    updateRequest: (req, res) => {
        db.Request.update(req.body,
            {
                where: {
                    id: req.params.id
                }
            })
            .then((dbRequest) => {
                res.json(dbRequest);
            });
    },

    // DELETE
    deleteRequest: (req, res) => {
        db.Request.destroy({
            where: {
                id: req.params.id
            }
        })
            .then((dbRequest) => {
                res.json(dbRequest)
            });
    }

}; // END EXPORT