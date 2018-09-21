const express = require("express");
const router = express.Router();
// CONTROLLER
const ctrl = require('../controllers/user.controller')

/**CREATE new user to User table */
router.post("/", ctrl.createUser);
/**GET ONE user from User table */
router.get("/:id", ctrl.findOneUser);
/**GET ALL user data from User table */
router.get("/", ctrl.findAllUser);
/**UPDATE user WHERE user is email FROM User table */
router.put("/:id", ctrl.updateUser);
/**DELETE user WHERE email is user FROM User table */
router.delete("/:id", ctrl.deleteUser);

module.exports = router;