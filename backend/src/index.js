const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const MongoDBConnection = require('./mongodb/mongodb_connection')
const myUserRoute = require("./routes/MyUserRoutes") 


const app = express()

// Any data will be JSON
app.use(express.json())

const corsOptions = {
    credentials: true, // Credentials özelliği gerekiyorsa
};
// CORS
app.use(cors(corsOptions))

app.use("/api/my/user", myUserRoute)


app.listen(7000, () => {
    console.log("Server started on localhost:7000")
})