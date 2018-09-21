const express = require("express");
const router = express.Router();
// CONTROLLER
const ctrl = require('../controllers/request.controller')

/**CREATE new Request to Request table */
router.post("/", ctrl.createRequest);
/**GET ONE Request from Request table */
router.get("/:id", ctrl.findOneRequest);
/**GET ALL Request data from Request table */
router.get("/", ctrl.findAllRequest);
/**UPDATE Request WHERE Request is email FROM Request table */
router.put("/:id", ctrl.updateRequest);
/**DELETE Request WHERE email is Request FROM Request table */
router.delete("/:id", ctrl.deleteRequest);

module.exports = router;