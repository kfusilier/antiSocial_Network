const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
	{
		content: String,
		createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
		Post: { type: Schema.Types.ObjectId, ref: 'Post' },
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Comment', commentSchema);

module.exports = new Schema({
	content: String,
	createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
});
