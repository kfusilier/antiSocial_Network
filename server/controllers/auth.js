const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models');


const register = async (req, res) => {
    const { email, password, screenName} = req.body
    if(password.length < 6){
        return res.status(400).json({message: "Password must be longer than 6 characters"})
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt)
        await db.User.create({
            screenName,
            email,
            password: hash,
        }).then(user=> 
            res.status(200).json({
                message: "User Created",
                data: user
            }))
    } catch (error) {
        res.status(401).json({
            message: "Failed to Create User",
            error: error
        })
    }
}

const login = async (req, res) => {
    try {
        const foundUser = await db.User.findOne({email: req.body.email}).select("+password")

        if (!foundUser) {
            return res.status(400).json({
                status: 400, 
                message: "Cannot find user in database",
            })
        }

        const isMatch = await bcrypt.compare(req.body.password, foundUser.password)
        if (isMatch) {
            const token = jwt.sign({_id: foundUser._id}, "antiSocial", {
                expiresIn: "3h",
            })

            return res.status(200).json({
                status: 200,
                message: "GREAT SUCCESS",
                token,
                foundUser,
            })
        } else {
            return res.status(400).json({
                status: 400,
                message: "Login credentials are incorrect.  Try again."
            })
        }
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Login credentials are incorrect.  Try again."
        })
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.body
    await db.User.findById(id)
    .then(user => user.remove())
    .then (user => res.status(201).json({message: "Success Delete User"}))
    .catch (error =>
    res.status(400).json({message: "error occurred", error: error.message})
    )
}

module.exports = {
    register, 
    login,
    deleteUser,
}