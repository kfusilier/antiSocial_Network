const req = require("express/lib/request");
const db = require("../models");
const User = require("../models/User");

const index = (req, res) => {
    db.User.find({}, (err, foundUsers) => {
        if (err) return res.send(err)
        return res.render("users/index", {
            users: foundUsers,
        })
    })
}

const show = (req, res) => {
    db.User.findById(req.params.id)
        .populate("posts")
        .populate("comments")
        .exec((err, foundUser) => {
            if (err) return res.send(err)
            return res.render("users/show", {
                user : foundUser,
                loginUser : req.user
            })
        })
}

const newUser = (req, res) => {
    res.render("users/new");
}


module.exports = {
    newUser,
    show,
}