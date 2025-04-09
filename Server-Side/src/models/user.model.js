import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema = new Schema({
    firstname: {
        type: String,
        required: [true, "firstname is required :src/modals/user.models.js"],
        trim: true
    },
    lastname:{
        types: String,
        required: [true, "lastname is required :src/modals/user.models.js"],
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password is required :src/modals/user.models.js"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "email is required :src/modals/user.models.js"],
        unique: true,
        trim: true,
        lowercase: true
    },
    refreshToken:{
        type: String
    }
})


userSchema.pre("save", async function(next){
    if(!this.isModified('password')) return next() //if no changes is being made to the password field don't do anuthing
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){  //method to compare password 
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    jwt.sign(
        {
            id: this._id,
            email: this.email,
            firstname: this.firstname,
            lastname: this.lastname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
    jwt.sign(
        {
            id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User =  mongoose.model('User', userSchema)