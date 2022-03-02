const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "User" },
        text: String,
        comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
        followers: {type: Boolean, default: false},
    }, 
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Post", postSchema);