const req = require("express/lib/request");
const db = require("../models");
const User = require("../models/User");

const index = (req, res) => {
    db.User.find({}, (err, foundUsers) => {
        if (err) return res.send(err)
        return res.render("users/index", {
            users: foundUsers,
        });
    });
};

const show = (req, res) => {
    db.User.findById(req.params.id)
        // .populate("posts")
        // .populate("comments")
        .exec((err, foundUser) => {
            if (err) return res.send(err)
            return res.render("users/show", {
                user : foundUser,
                loginUser : req.user
            });
        });
};

const newUser = (req, res) => {
    res.render("users/new");
};

const create = async (req, res) => {
    const user = new db.User({
        username : req.body.username,
        bio : req.body.bio,
    })
    const createdUser = await user.save();
    try {
        console.log(createdUser, "created user")
        return res.redirect("/users")
    } catch (err) {
        res.send(err)
    }
}


module.exports = {
    index,
    show,
    newUser,
    create,
    
}