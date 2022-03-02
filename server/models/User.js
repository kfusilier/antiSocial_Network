const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        screenName: { type: String, required: true },
        userName: { type: String, required: true },
        password: { type: String, required: true },
        token: { type: String, required: true },
        followList: [String],
        posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
        comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }]
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);