import mongoose,{Schema} from "mongoose";

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

export const User =  mongoose.model('User', userSchema)