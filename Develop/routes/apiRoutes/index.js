//Note: Express router instance and importing apiRoutes module
const router = require("express").Router();
const apiRoutes = require("../apiRoutes");

//Note:Using imported API routes with the router
router.use(apiRoutes);

//Note: Exporting configured router to be used in other parts of this application
module.exports = router;