const cloudinary = require("cloudinary").v2;
const mongoose = require("mongoose");
const { Restaurant } = require("../mongodb/models/restaurant");

class Controller {
    async createMyRestaurant(req, res) {
        try {
            if (!req.file) {
                return res.status(400).json({ message: "No file uploaded" });
            }

            const existingRestaurant = await Restaurant.findOne({ user: req.userId });

            if (existingRestaurant) {
                return res.status(409).json({ message: "User restaurant already exists" });
            }

            const imageFile = req.file;

            const b64 = Buffer.from(imageFile.buffer).toString("base64");
            const dataURI = "data:" + imageFile.mimetype + ";base64," + b64;
            const uploadResponse = await cloudinary.uploader.upload(dataURI);
            const imageUrl = uploadResponse.url;

            const restaurant = new Restaurant({
                user: new mongoose.Types.ObjectId(req.userId),
                restaurantName: req.body.restaurantName,
                city: req.body.city,
                country: req.body.country,
                deliveryPrice: parseFloat(req.body.deliveryPrice),
                estimatedDeliveryTime: req.body.estimatedDeliveryTime,
                cuisines: JSON.parse(req.body.cuisines),
                menuItems: JSON.parse(req.body.menuItems),
                imageUrl: imageUrl,
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
