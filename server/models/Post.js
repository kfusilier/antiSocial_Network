const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const commentSchema = require("./Comment.js");


const commentSchema = new Schema(
	{
		content: String,
		createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
	},
	{
		timestamps: true,
	}
);

const postSchema = new Schema(
    {
        user: { 
            type: Schema.Types.ObjectId, 
            ref: "User", 
        },
        text: {
        type: String,
        },
        comments: [commentSchema],
        likes: { type: Number, default: 0}

    },
        // followers: {
        //     type: Boolean, 
        //     default: false
        // },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Post", postSchema);