const cloudinary = require("cloudinary").v2;
const mongoose = require("mongoose");
const { Restaurant } = require("../mongodb/models/restaurant");

class Controller {
    async createMyRestaurant(req, res) {
        try {

            if (!req.file || req.file.length === 0) {
                return res.status(400).json({ message: "No files uploaded" });
            }

            const existingRestaurant = await Restaurant.findOne({ user: req.userId });

            if (existingRestaurant) {
                return res.status(409).json({ message: "User restaurant already exists" });
            }

            const imageFile = req.File;
            
            console.log(`Your imageFile is ${imageFile}`)

            const b64 = Buffer.from(imageFile.buffer).toString("base64");
            const dataURI = "data:" + imageFile.mimetype + ";base64," + b64;
            const uploadResponse = await cloudinary.uploader.upload(dataURI);
            const imageUrl = uploadResponse.url;

            console.log(`Your imageUrl is ${imageUrl}`)

            const restaurant = new Restaurant({
                body: req.body,
                lastUpdate: new Date(),
            });

            await restaurant.save();

            res.status(201).send(restaurant);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Something went wrong :(" });
        }
    }
}

module.exports = Controller;
