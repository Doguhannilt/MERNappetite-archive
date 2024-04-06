const mongoose = require('mongoose')
require('dotenv').config()


class MongoDBConnection{
    async connection () {
        try {
            await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
            console.log("Connected to the DB");
        } catch (error) {
            console.error("Connection error:", error);
        }
}}


// Database Connection
const MONGODBCONNECTION = new MongoDBConnection();
MONGODBCONNECTION.connection();

