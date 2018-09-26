const express = require("express");
var models = require("../models");
var jwt = require('jsonwebtoken');
var helpers = require("./helpers/auth.helpers");
var routeHelpers = require("./helpers/route.helper");
const router = express.Router();


router.post("/login", function (req, res) {
    var user = {
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
                var expiry = new Date();
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
    var user = {
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