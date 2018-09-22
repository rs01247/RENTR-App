const express = require("express");
const router = express.Router();
// CONTROLLER
const ctrl = require('../controllers/item.controller')

/**CREATE new user to User table */
router.post("/", ctrl.createItem);
/**GET ONE user from User table */
router.get("/:id", ctrl.findOneItem);
/**GET ALL user data from User table */
router.get("/", ctrl.findAllItem);
router.get("/all/:id", ctrl.findItemByUser);
/**UPDATE user WHERE user is email FROM User table */
router.put("/:id", ctrl.updateItem);
/**DELETE user WHERE email is user FROM User table */
router.delete("/:id", ctrl.deleteItem);

module.exports = router;