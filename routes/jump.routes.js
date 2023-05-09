const express = require("express");
const router = express.Router();

const Jump = require("../models/Jump.model");
// const Comment = require("../models/Comment.model");
const User = require("../models/User.model");

router.post('/jump', async (req, res, next) => {

    const { title, country, city, access, approach, landing, gear, exitpoint, height, altitude, latitude, description, img } = req.body;

    console.log(req.payload)
    const userId = req.payload._id

    try {
        const jump = await Jump.create({ title, country, city, access, approach, description, landing, gear, height, exitpoint, altitude, latitude, img, date, opener: userId, location: locationId, jumped: [], comments: [] })
        const userUpdate = await User.findByIdAndUpdate(userId, { $push: { opened: jump._id } })
        res.json(jump)
    } catch (err) {
        console.log(err)
    }
});
