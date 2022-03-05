const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models');


const register = async (req, res) => {
    const { userName, password, screenName } = req.body
    if(password.length < 6){
        return res.status(400).json({message: "Password must be longer than 6 characters"})
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt)
        await db.User.create({
            screenName,
            userName,
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

}

module.exports = {
    register, 
    login,
}