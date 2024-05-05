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
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:7000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
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