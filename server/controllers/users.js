const db = require("../models");
const User = require("../models/User");

const index = (req, res) => {
    db.User.find({}, (err, allUsers) => {
        if (err) return res.status(400).json({
            message: "Utter Failure! for INDEX",
            error: err,
        })
        return res.status(200).json({
			message: "Success!",
			data: allUsers,
		});
    });
};

const create = (req, res) => {
	db.User.create(req.body, (err, createdUser) => {
		if (err)
			return res.status(400).json({
				message: "Utter Failure! for create",
				error: err,
			});
		return res.status(201).json({
			message: "Success",
			data: createdUser,
		});
	});
};


module.exports = {
    index,
    create,
    
}