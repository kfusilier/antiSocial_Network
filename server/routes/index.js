const router = require('express').Router();

//normally we would put this in server.js but we're doing it on layer deeper so we can prepend our api calls with "/api/<route here>"
router.use('/posts', require('./posts'));
// router.use("/posts", require("./comments"))

module.exports = {
	posts: require('./posts'),
	users: require('./users'),
	// auth: require('./auth')
};

// const router = require("express").Router()

// //normally we would put this in server.js but we're doing it on layer deeper so we can prepend our api calls with "/api/<route here>"
// router.use("/posts", require("./posts"))
// router.use("/users", require("./users"))

// module.exports = router;
