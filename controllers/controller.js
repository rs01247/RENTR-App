const db = require("../models");

module.exports = (app) => {

    /**CRUD ROUTES FOR USER TABLE */

    /**GET ALL user data from User table */
    app.get("/api/user/", (req, res) => {
        db.User.findAll({})
            .then((dbUser) => {
                res.json(dbUser);
            });
    });

    /**GET ONE user from User table */
    app.get("/api/user/:email", (req, res) => {
        db.User.findOne({
            where: {
                email: req.params.email
            }
        })
            .then((dbUser) => {
                res.json(dbUser);
            });
    });

    /**GET ALL item for a specific User FROM User table*/
    app.get("/api/user/item/:email", (req, res) => {
        db.Item.findAll({
            where: {
                email: req.params.email
            }
        }).then((dbUser) => {
            res.json(dbUser);
        });
    });

    /**CREATE new user to User table */
    app.post("/api/user", (req, res) => {
        console.log(req.body);
        db.User.create({
            name: req.body.name,
            location: req.body.location,
            password: req.body.password,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber
        })
            .then((dbUser) => {
                res.json(dbUser);
            });
    });
    /**DELETE user WHERE email is user FROM User table */
    app.delete("api/user/:email", (req, res) => {
        db.User.destroy({
            where: {
                email: req.params.email
            }
        })
            .then((dbUser) => {
                res.json(dbUser)
            });
    });


    /**UPDATE user WHERE user is email FROM User table */
    app.put("/api/user", (req, res) => {
        db.User.update(req.body,
            {
                where: {
                    email: req.body.email
                }
            })
            .then((dbUser) => {
                res.json(dbUser);
            });
    });

    /**CRUD ROUTES FOR ITEM TABLE */

    /**GET ALL item data from Item table */
    app.get("/api/item/", (req, res) => {
        db.Item.findAll({})
            .then((dbUser) => {
                res.json(dbUser);
            });
    });

    /**GET ONE item from Item table */
    app.get("/api/item/:email", (req, res) => {
        db.Item.findOne({
            where: {
                email: req.params.email
            }
        })
            .then((dbUser) => {
                res.json(dbUser);
            });
    });

    /**CREATE new item to Item table */
    app.post("/api/item", (req, res) => {
        db.Item.create({
            email: req.body.email,
            itemName: req.body.itemName,
            description: req.body.description,
            date: req.body.date,
            isAvailable: req.body.isAvailable
        })
            .then((dbUser) => {
                res.json(dbUser);
            });
    });
    /**DELETE item WHERE item is email from Item table */
    app.delete("api/item/:email", (req, res) => {
        db.Item.destroy({
            where: {
                email: req.params.email
            }
        })
            .then((dbUser) => {
                res.json(dbUser)
            });
    });


    /**UPDATE user WHERE email is item FROM Item table */
    app.put("/api/item", (req, res) => {
        db.Item.update(req.body,
            {
                where: {
                    email: req.body.email
                }
            })
            .then((dbUser) => {
                res.json(dbUser);
            });
    });


};