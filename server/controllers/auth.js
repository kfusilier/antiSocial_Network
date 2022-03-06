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
            return res
                .status(400)
                .json({status: 400, message: "cannot find user in database"})
        }

        const isMatch = await bcrypt.compare(req.body.password, foundUser.password)
        // check if the password match
        if(isMatch) {
            // jwt.sign(payload, secret key for signing, config object)
            // signature ensure that the token hasn't been altered, and we sign off on that with our secret key
            const token = jwt.sign({_id: foundUser._id}, "hailsatan", {
                expiresIn: "3h"
            })

            return res.status(200).json({
                status: 200,
                message: "GREAT SUCCESS",
                token,
            })
        } else {
            //the password provided doesn't match the password in the database
            return res.status(400).json({
                status: 400,
                message: "password is wrong, Homie :((("
            })
        }
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Site broke or something. oop. Try again."
        })
    }
}

module.exports = {
    register, 
    login,
}