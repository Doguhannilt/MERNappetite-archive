// Express
const express = require('express')

// Cors
const cors = require('cors')

// Dotenv
const dotenv = require('dotenv')

// MongoDB
const MongoDBConnection = require('./mongodb/mongodb_connection')

// Routes
const myUserRoute = require("./routes/MyUserRoutes") 
const myRestaurantRoute = require("./routes/MyRestaurantRoute")

// Cloudinary
const Cloudinary = require('./cloudinary/cloudinary')
const { jwtCheck, jwtParse } = require('./middleware/auth')

// PORT
const PORT = 7000

// CookieParser
const cookieParser = require("cookie-parser")


const app = express()

// Any data will be JSON
app.use(express.json())
 

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
// CORS
app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true,
}));
try {
    // endpoint: /api/my/user/
app.use("/api/my/user", myUserRoute)

// endpoint: /api/my/restaurant
app.use("/api/my/restaurant", myRestaurantRoute)
} catch (error) {
    console.log(error)
} 
 

// Cloudinary setup
const cloudinary = new Cloudinary
cloudinary.cloudinary_set()

app.listen(PORT, () => {
    console.log(`Server is started on ${PORT}`)
})