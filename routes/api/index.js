const router = require("express").Router();
const ideasRoutes = require("./ideas");

// Idea routes
router.use("/ideas", ideasRoutes);

module.exports = router;