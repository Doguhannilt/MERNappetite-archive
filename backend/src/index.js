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
// Cloudinary
const Cloudinary = require('./cloudinary/cloudinary')
// PORT
const PORT = 7000

const app = express()

// Any data will be JSON
app.use(express.json())

const corsOptions = {
    credentials: true, // Credentials özelliği gerekiyorsa
};
// CORS
app.use(cors(corsOptions))

// endpoint: /api/my/user/
app.use("/api/my/user", myUserRoute)

// Cloudinary setup
const cloudinary = new Cloudinary
cloudinary.cloudinary_set()

app.listen(PORT, () => {
    console.log(`Server is started on ${PORT}`)
})