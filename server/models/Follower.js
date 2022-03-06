const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const followerSchema = new Schema (
    {
        follower: {type: Schema.Types.ObjectId, ref:"User"}
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model ("Follower", followerSchema) 