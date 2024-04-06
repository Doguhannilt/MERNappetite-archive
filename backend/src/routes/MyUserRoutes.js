const express = require("express")
const { createCurrentUser } = require("../controllers/MyUserController")
const Controller = require("../controllers/MyUserController")

const router = express.Router()
const controller = new Controller();

// /api/my/user
router.post("/", (req, res) => {
  controller.createCurrentUser(req, res);
});

// /api/my/user/info
router.get("/info/:email", (req,res) => {
  controller.getCurrentUser(req,res)
})

router.put("/update/:email", (req,res) => {
  controller.updateCurrentUser(req,res)
})
module.exports = router;