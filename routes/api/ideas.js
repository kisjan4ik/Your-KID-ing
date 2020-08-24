const router = require("express").Router();
const ideasController = require("../../controllers/ideasController");

// Matches with "/api/ideas"
router.route("/")
  .get(ideasController.findAll)

  // finding all matching data from db
  .post(ideasController.create);
router.route("/:where/:age")

  // /:activeness
  .get(ideasController.findWhere);

// Matches with "/api/ideas/:id"
router
  .route("/:id")
  .get(ideasController.findById)
  .put(ideasController.update)
  .delete(ideasController.remove);

// /:places
router.route("/:id/:email")
  .post(ideasController.saveIdea);

router.route("/dashboard/savedplaces/:id")
  .get(ideasController.getSaved);

//****************************/ delete the idea from the savedplaces /*********************************//

router.route("/dashboard/savedplaces/:id")
  .delete(ideasController.remove);

module.exports = router;
