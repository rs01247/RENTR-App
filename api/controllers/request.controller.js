const db = require('../models');

module.exports = {

    // CREATE
    createRequest: (req, res) => {
        console.log(req.body);
        console.log(db.Request.associations)
        const request = {
            ItemId: req.body.itemId,
            OwnerId: req.body.ownerId,
            RequestorId: req.body.requestorId
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
            })
            .catch((err) => {
                console.error(err);
            })
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
            })
            .catch((err) => {
                console.error(err);
            })
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
            })
            .catch((err) => {
                console.error(err);
            })
    },
    findByRequestor: (req, res) => {
        
        const requestorId = req.params.requestorId;
        const itemId = req.params.itemId
        
            db.Request.findOne({
                where: {
                    requestorId: requestorId,
                    itemId: itemId
                    
                },
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
            })
            .catch((err) => {
                console.error(err);
            })
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
            })
            .catch((err) => {
                console.error(err);
            })
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
            })
            .catch((err) => {
                console.error(err);
            })
    }

}; // END EXPORT