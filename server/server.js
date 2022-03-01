require("dotenv").config(); 

/* ===== External Modules ===== */
const express = require('express');

/* ===== Internal Modules ===== */
require('./models');

/* ===== Instanced Modules ===== */
const app = express();

/* ===== Configuration ===== */
const config = require('@antisocial_network/config');

/* ===== Routes & Controllers ===== */
app.all('/api/*', (req, res, next) => {
	res.send("This isn't what you're looking for!");
});

/* ===== Server Listener ===== */
app.listen(config.PORT, () => {
	console.log(`antisocial live on http://localhost${'config.PORT'}`);
});
