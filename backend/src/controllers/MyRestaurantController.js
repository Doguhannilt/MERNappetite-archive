const { Restaurant } = require("../mongodb/models/restaurant");
const express = require("express");
const cloudinary = require("cloudinary");
const mongoose = require("mongoose")


class Controller {
    async createMyRestaurant(req, res) {
        try {
            const existingRestaurant = await Restaurant.findOne({ user: req.userId });

            if (existingRestaurant) {
                return res.status(409).json({ message: "User restaurant already exists" });
            }

            const imageFile = req.file;

            // Upload the image to cloudinary
            const b64 = Buffer.from(imageFile.buffer).toString("base64");
            const dataURI = "data:" + imageFile.mimetype + ";base64," + b64;
            const uploadResponse = await cloudinary.uploader.upload(dataURI);
            const imageUrl = uploadResponse.url;

            const restaurant = new Restaurant(req.body);
            restaurant.imageUrl = imageUrl;

            restaurant.user = new mongoose.Types.ObjectId(req.userId);
            restaurant.lastUpdate = new Date();

            await restaurant.save();

            res.status(201).send(restaurant);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Something went wrong :(" });
        }
    }
}

module.exports = Controller;
