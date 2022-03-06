const router = require("express").Router();
const { auth } = require("../controllers");

router.post("/register", auth.register);
router.post("/login", auth.login)
router.delete("/:id", auth.deleteUser)


module.exports = router;
