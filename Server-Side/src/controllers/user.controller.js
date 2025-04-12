import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
    const {firstname,lastname,email,password} = req.body

    console.log(req.body)

    // checking if the data is valid
    if([firstname,lastname,email,password].includes("")){
        throw new ApiError(400,"Email is required")
    }

    // checking if user already exists
    const existingUser = await User.findOne({email})
    if(existingUser){
        throw new ApiError(400,"User already exists")
    }

    // creating a new user
    const user = await User.create({
        firstname,
        lastname,
        email,
        password
    })

    // checking the user by finding it in db
    const createdUser = await User.findById(user._id).select("-password")

    if(!createdUser){
        throw new ApiError(500,"Something went wrong while creating a user")
    }
    
    return res.status(201).json(
        new ApiResponse(201,createdUser,"User created successfully")
    )

})

export {registerUser}