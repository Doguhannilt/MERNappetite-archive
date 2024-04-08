const express = require("express")
const router = express.Router()
const multer = require("multer")

const Controller = require("../controllers/MyRestaurantController")


const {validateMyRestaurantRequest} = require("../middleware/validation")
const { jwtCheck, jwtParse } = require("../middleware/auth")

const storage = multer.memoryStorage()
const upload = multer ({
    storage: storage,
    limits:{
        fileSize: 5 * 1024 * 1025 // 5mb
    },
})

const controller = new Controller();

// /api/my/restaurant
router.post(
    "/",    
    upload.single("imageFile"),
    validateMyRestaurantRequest,
    jwtCheck,
    jwtParse,
    (req, res) => { 
        controller.createMyRestaurant(req, res); // Kontrolcü işlevini burada çağırın
    }
);

module.exports = router