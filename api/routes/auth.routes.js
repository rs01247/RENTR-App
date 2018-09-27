const express = require("express");
const models = require("../models");
const jwt = require('jsonwebtoken');
const helpers = require("./helpers/auth.helpers");
const routeHelpers = require("./helpers/route.helper");
const router = express.Router();


router.post("/login", function (req, res) {
    const user = {
        email: req.body.email,
        password: req.body.password
    }
    console.log(user)
    models.User.findOne({
        where: {
            email: user.email
        }
    })
        .then(function (resp) {
            if (helpers.checkIfValidPass(resp, user.password)) {
                const expiry = new Date();
                expiry.setDate(expiry.getDate() + 7);

                res.json({
                    token: jwt.sign({
                        exp: parseInt(expiry.getTime() / 1000),
                        userID: resp.id,
                        name: resp.name,
                        email: resp.email,
                    }, process.env.JWT_SECRET)
                });
            }
            else {
                routeHelpers.sendJsonError(res, new Error("WRONG PASSWORD"), 401);
            }
        })
        .catch(function (err) {
            routeHelpers.sendJsonError(res, err);
        })
});

// Create a new example
router.post("/register", function (req, res) {
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        location: req.body.location,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        userName: req.body.userName

    }
    user.salt = helpers.getSalt();
    user.hash = helpers.getHash(user.salt, user.password);
    console.log(user);

    models.User.create(user)
        .then(function (resp) {
            res.json({ message: "Creation Sucess!", id: resp.id })
        })
        .catch(function (err) {
            console.log(err);
            routeHelpers.sendJsonError(res, err);
        })
});

module.exports = router;