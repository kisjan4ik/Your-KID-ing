const router = require("express").Router();
const ideasController = require("../../controllers/ideasController");

// Matches with "/api/ideas"
router.route("/")
  .get(ideasController.findAll)
  // .get(ideasController.findAll)
  .post(ideasController.create);
router.route("/:activeness/:where/:age")
.get(ideasController.findWhere);
// Matches with "/api/ideas/:id"
router
  .route("/:id")
  .get(ideasController.findById)
  .put(ideasController.update)
  .delete(ideasController.remove);

module.exports = router;
