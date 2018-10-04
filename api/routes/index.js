const express = require("express");
const router = express.Router();
const userRoutes = require("./user.routes");
const itemRoutes = require("./item.routes");
const transRoutes = require("./transaction.routes");
const requestRoutes = require("./request.routes");
const emailRoutes = require("./email.routes");

router.use("/user", userRoutes);
router.use("/item", itemRoutes);
router.use("/transaction", transRoutes);
router.use("/request", requestRoutes);
router.use("/email", emailRoutes);

module.exports = router;