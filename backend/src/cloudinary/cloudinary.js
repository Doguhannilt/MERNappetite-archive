const cloudinary = require("cloudinary")

class Cloudinary {
    cloudinary_set = () => {
        try {
            cloudinary.config({
                cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
                api_key: process.env.CLOUDINARY_API_KEY,
                api_secret: process.env.CLOUDINARY_API_SECRET
            })
            console.log("Cloudinary is started")
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = Cloudinary