const express = require("express");
const router = express.Router();
// CONTROLLER
const ctrl = require('../controllers/transaction.controller')

/**CREATE new Transaction to Transaction table */
router.post("/", ctrl.createTransaction);
/**GET ONE Transaction from Transaction table */
router.get("/:id", ctrl.findOneTransaction);
/**GET ALL Transaction data from Transaction table */
router.get("/", ctrl.findAllTransaction);
/**UPDATE Transaction WHERE Transaction is email FROM Transaction table */
router.put("/:id", ctrl.updateTransaction);
/**DELETE Transaction WHERE email is Transaction FROM Transaction table */
router.delete("/:id", ctrl.deleteTransaction);

module.exports = router;