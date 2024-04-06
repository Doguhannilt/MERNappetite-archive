const {User} = require("../mongodb/models/user")
const express = require("express")



class Controller {
    async createCurrentUser(req,res) {
        try {
            const { email } = req.body;
            const existingUser = await User.findOne({ email });
            const newUser = new User(existingUser);
            await newUser.save();
        } catch (err) {
            console.log(err);
        }
    }

    async getCurrentUser(req,res) {
        try {
                // GET Algorithm
                /*
                    When an user click the "User Profile" button, Axios send a GET request by using "sub" parameter in Auth0.
                    This function will return name, adress etc... parameters by using it
                    Endpoint: api/my/user/info
                */
                const email = req.params.email
                const existingUser = await User.find({email: email})
                res.json(existingUser)
        } catch (err) {
            console.log(err)
        }
    }

    async updateCurrentUser(req,res) {
        try {
                // UPDATE algorithm
                /*
                    When an user click the "Update" button, Axios send a PUT request to this endpoint: "api/my/user/info"
                    This function will update the user's parameters
                */
                    const email = req.params.email;
                    const body = req.body;
                    const userId = await User.findOne({ email: email }).select('_id');
                    if (userId) {
                        const updatedUser = await User.findByIdAndUpdate(
                            userId,
                            { name: body.name, addressLine1: body.address, gender: body.gender },
                            { new: true }
                            // {nickname : body.nickname}
                        );
                       console.log(updatedUser)
                       res.status(200).json({message:"Added"})
                    } else {
                       
                    }
                }
                catch (err) {
                    console.log(err)
                }
}
}
module.exports = Controller;
