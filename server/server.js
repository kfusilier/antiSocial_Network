const path = require("path");
require("dotenv").config({path: '../.env'}); 

/* ===== External Modules ===== */
const express = require('express');
const cors = require("cors");


/* ===== Internal Modules ===== */
require('./models');

/* ===== Instanced Modules ===== */
const app = express();
const routes = require("./routes/index");

/* ===== Configuration ===== */
const config = require('@antisocial_network/config');


/* ==== Middleware ==== */
app.use(cors());
app.use(express.static(path.join("build")));
//helps us read body, including body with Postman and req.body
app.use(express.urlencoded({ extended: true }));
// JSON parsing middleware
// you need this for full stack crud front and back end! u gotta parse that json! do not forget this!!
app.use(express.json());


/* ===== Routes & Controllers ===== */

app.use("/api/posts", routes.posts);
app.use("/api/users", routes.users);

///test

// app.use('/api/auth', routes.auth);



app.all('/api/*', (req, res, next) => {
	res.send("This isn't what you're looking for!");
});

/* ===== Server Listener ===== */
app.listen(config.PORT, () => {

	console.log(`antiSocial live on http://localhost:${config.PORT}`);

});



