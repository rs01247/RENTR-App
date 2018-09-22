const express = require("express");
const router = express.Router();
const userRoutes = require("./user.routes");
const itemRoutes = require("./item.routes");
const authRoutes = require("./auth.routes");
const transRoutes = require('./transaction.routes');
const requestRoutes = require('./request.routes');

router.use("/user", userRoutes);
router.use("/item", itemRoutes);
router.use("/auth", authRoutes);
router.use('/transaction', transRoutes);
router.use('/request', requestRoutes);

module.exports = router;