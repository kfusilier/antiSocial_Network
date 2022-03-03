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

const show = (req, res) => {
	db.User.findById(req.params.id), (err, foundUser) => {
		if(err)
			return res.status(400).json({
				message: "Utter Failure on Show!",
				error: err,
			});
		return res.status(201).json({
			message: "Success",
			data: foundUser,
		});

	};
}

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

const destroy = (req, res) => {
	db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
		if (err) 
			return res.status(400).json({
				message: "Utter Failure on delete!",
				error: err,
			});
		return res.status(200).json({
			message: "Success!",
			data: deletedUser,
		});
	});
};


module.exports = {
    index,
    create,
	show,
	destroy,

    
}