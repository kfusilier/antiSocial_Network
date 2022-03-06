const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema(
    {  
        screenName: { type: String, required: true, unique:true },
        userName: { type: String, required: true, unique: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        // token: { type: String, required: true },
        posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
        comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
        followers: [{type: Schema.Types.ObjectId, ref: 'User'}],
        following: [{type: Schema.Types.ObjectId, ref:"User"}],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);