const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const commentSchema = new Schema(
    {
        comment: {
            type: String,
            required: true,
        },
        creator: { type: Schema.Types.ObjectId, ref: 'User' },
        jump: { type: Schema.Types.ObjectId, ref: 'Jump' },
    },
    {
        timestamps: true,
    }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;
