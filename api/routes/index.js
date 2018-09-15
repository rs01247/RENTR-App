const express = require("express");
const router = express.Router();
const userRoutes = require("./user.routes");
const itemRoutes = require("./item.routes");
const authRoutes = require("./auth.routes");

router.use("./user", userRoutes);
router.use("./item", itemRoutes);
router.use("./auth", authRoutes);

module.exports = router;