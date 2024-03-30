const {User} = require("../mongodb/models/user")


const createCurrentUser = async (req, res) => {
    // Check if the user exists
    // Create the user if it doesnt exist 
    // Return the user object to the calling client
    try {
        
        const {email} = req.body
        const existingUser = await User.findOne({email})

        if(existingUser) {
            return res.status(200).send()
        }

        const newUser = new User(req.body)
        await newUser.save()

        res.status(201).json(newUser.toObject())

    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error creating user"})
    } 
}

module.exports = {
    createCurrentUser
}
