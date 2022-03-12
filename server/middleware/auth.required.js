// jwt middleware for verification
const jwt = require("jsonwebtoken");
const db = require("../models")


module.exports = async (req, res, next) => {
	try {
		//grab that token
		const bearerHeader = req.headers.authorization;

		//if there is no token
		if (typeof bearerHeader === 'undefined') {
			return res.sendStatus(403);
		}

		//if there is a token
		const token = bearerHeader.split(' ')[1];
		const payload = await jwt.verify(token, 'antiSocial');
		req.userId = payload._id;
		
		const {_id} = payload
		db.User.findById(_id).then(userData =>{
			req.user = userData
			next();
		})
	} catch (error) {
		console.log(error);
		return res
			.status(500)
			.json({
				status: 500,
				message: 'Internal Server Error :(( Sowwy',
			});
	}
};

