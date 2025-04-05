import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname:{
        types: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})

export const User =  mongoose.model('User', userSchema)