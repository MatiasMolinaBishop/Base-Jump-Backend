const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const jumpSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        country: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        city: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        access: {
            type: String,
            required: true,
        },
        approach: {
            type: String,
            required: true,
        },
        landing: {
            type: String,
            required: true,
        },
        gear: {
            type: String,
            required: true,
        },
        exitpoint: {
            type: String,
            required: true,
        },
        height: {
            type: String,
            required: true,
        },
        altitude: {
            type: Number,
            required: true
        },
        latitude: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        //Images should be an array that allows users to have more than 1 image (carousel displaying images if more than one)
        img: {
            type: String,
            default: "https://images.unsplash.com/photo-1573733204684-128d0c72395a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
        },
        opener: { type: Schema.Types.ObjectId, ref: 'User' },
        comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
        jumped: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
);

const Jump = model("Jump", jumpSchema);

module.exports = Jump;
