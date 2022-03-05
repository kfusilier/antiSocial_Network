const router = require("express").Router();
const { auth } = require("../controllers");

router.post("/register", auth.register);

module.exports = router;
