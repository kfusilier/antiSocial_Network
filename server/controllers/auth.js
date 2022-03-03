const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../models")

const register = async (req, res) => {

    try{
        const foundUser = await db.User.findOne({email: req.body.email})

        if(foundUser) {
            //exponential randomization of a string (num) of times
            //the more salt, the longer it takes. 8-10 is the sweet spot!
            const salt = await bcrypt.genSalt(10);

            //hasing takes the salted password and gives it a different value
            //ex. "password" may look somehting like "t5u3hhhhj2sune3u7" if its not properly salted
            //Easy to decode! Not very safe, p = t5, a = u3, s="hh", etc
            const hash = await bcrypt.hash(req.body.password, salt)

            const updatedUser = await db.User.findByIdAndUpdate(
                {_id: foundUser._id}, 
                {
                    $set: {password: hash}
                },
                {new: true}
            )
            console.log(updatedUser, "UPDATED USER WITH THE SALT HASHBROWN PASSWORDS YO")
            return res
                .status(201)
                .json({status: 201, message: "SUCCESS!", updatedUser})
        }
        return res.status(400).json({
            status: 400, 
            message: "Email address is not in the database, try again!"
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Site broke or something. oop. Try again."
        })
    }
}

const login = async (req, res) => {
    try {
        const foundUser = await db.User.findOne({email: req.body.email}).select("+password")

        if (!foundUser) {
            return res
                .status(400)
                .json({status: 400, message: "Email or password is wrong, Homie :((("})
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
                message: "Email or password is wrong, Homie :((("
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
    login
}