const express = require("express")
const { createCurrentUser } = require("../controllers/MyUserController")

const router = express.Router()


// /api/my/user
router.post("/", createCurrentUser)

module.exports = router