//When we want something from the user (client) we get it from request object
//When we want to send something to the user, we use response object

const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");


const registerUser = asyncHandler(async (request, response) => {
    const { name, email, password, avatar } = request.body;

    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists) {
        response.status(400);
        throw new Error("User Already Exists");
    }

    const user = await User.create({
        name,
        email,
        password,
        avatar
    })

    if (user) {
        response.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            avatar: user.avatar,
            token: generateToken(user._id),
        })
    } else {
        response.status(400);
        throw new error("Error occured while creating the user.")
    }
}); 


const loginUser = asyncHandler(async (request, response) => {
    const { email, password } = request.body;

    //Checking if the user exists in the database
    const user = await User.findOne({ email });

    //If user exists run below chunk of code otherwise run else block
    if (user && await user.matchPassword(password)) {
        response.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            avatar: user.avatar,
            token: generateToken(user._id),
        })
    } else {
        response.status(401);
        throw new Error("Invalid Email or Password!")
    }

}); 


module.exports = { registerUser, loginUser };