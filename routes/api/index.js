const router = require("express").Router();
const path = require("path");
const bookRoutes = require("./books");
const googleRoutes = require("./google");

// Google Routes
router.use("/google", googleRoutes);
// Book routes
router.use("/books", bookRoutes);

// Single HTML page loaded if previous routes are not used
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});


module.exports = router;
