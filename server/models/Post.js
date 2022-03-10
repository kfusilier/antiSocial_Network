const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const commentSchema = require("./Comment.js");

const postSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "User" },
        text: {type: String},
        comments: [commentSchema],
        followers: {type: Boolean, default: false},
    }, 
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Post", postSchema);