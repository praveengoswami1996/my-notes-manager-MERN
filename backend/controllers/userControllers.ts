//When we want something from the user (client) we get it from request object
//When we want to send something to the user, we use response object

import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel";
import generateToken from "../utils/generateToken";
import { setCookie } from "../utils/cookies";

export const registerUser = expressAsyncHandler(async (request, response) => {
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
            success: true,
            data : {
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                avatar: user.avatar,
            }
        })
    } else {
        response.status(400);
        throw new Error("Error occured while creating the user.")
    }
}); 


export const loginUser = expressAsyncHandler(async (request, response) => {
    const { email, password } = request.body;

    //Checking if the user exists in the database
    const user = await User.findOne({ email });

    //If user exists run below chunk of code otherwise run else block
    if (user && await user.matchPassword(password)) {
        
        const authToken = generateToken(user._id.toString());
        
        //Setting a cookie containing token in the response
        setCookie(response, {
            name: "authToken", //Cookie Name 
            age: 12 * 60 * 60 * 1000, //Cookie Age
            data: authToken 
        })

        response.status(200).json({
            success: true,
            data: {
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                avatar: user.avatar,
                authToken: generateToken(user._id.toString()),
            },
        })
    } else {
        response.status(401);
        throw new Error("Invalid Email or Password!")
    }
}); 
