const router = require("express").Router();
const ctrl = require("../controllers");
const authRequired = require('../middleware/auth.required');

router.get("/", ctrl.users.index);
router.get("/:id", ctrl.users.show);
router.put("/:id/follow", ctrl.users.follow);
router.post("/", ctrl.users.create);
router.put("/:id", ctrl.users.update);
router.delete("/:id", ctrl.users.destroy);


module.exports = router;