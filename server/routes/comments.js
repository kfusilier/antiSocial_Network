const router = require("express").Router();
const {comments} = require("../controllers");

router.get("/", comments.idx);
router.post("/posts/:id/comments", comments.create);
router.delete("/comments/:id", comments.destroy);


module.exports = router;