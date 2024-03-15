const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')


const app = express()

// Any data will be JSON
app.use(express.json())

// CORS
app.use(cors())

app.get('/test', async (req,res) => {
    console.log("Tested")
})


app.listen(7000, () => {
    console.log("Server started on localhost:7000")
})