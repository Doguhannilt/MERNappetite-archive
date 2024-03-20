const mongoose = require('mongoose')
require('dotenv').config()

exports.connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
        console.log("Connected to the DB");
    } catch (error) {
        console.error("Connection error:", error);
    }
};