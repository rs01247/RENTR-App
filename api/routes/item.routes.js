const express = require("express");
const router = express.Router();
// CONTROLLER
const ctrl = require('../controllers/item.controller')

/**CREATE new Item to Item table */
router.post("/", ctrl.createItem);
/**GET ONE Item from Item table */
router.get("/:id", ctrl.findOneItem);
/**GET ALL Item data from Item table */
router.get("/", ctrl.findAllItem);
/**GET ALL Item data from Item table by User */
router.get("/user/item/:id", ctrl.findItemByUser);
/**UPDATE Item WHERE Item is email FROM Item table */
router.put("/:id", ctrl.updateItem);
/**DELETE Item WHERE email is Item FROM Item table */
router.delete("/:id", ctrl.deleteItem);

module.exports = router;