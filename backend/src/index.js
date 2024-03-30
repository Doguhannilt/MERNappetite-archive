const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const {connection}  = require('./mongodb/mongodb_connection')
const myUserRoute = require("./routes/MyUserRoutes") 


const app = express()

// Database Connection
connection()

// Any data will be JSON
app.use(express.json())

// CORS
app.use(cors())

app.use("/api/my/user", myUserRoute)


app.listen(7000, () => {
    console.log("Server started on localhost:7000")
})