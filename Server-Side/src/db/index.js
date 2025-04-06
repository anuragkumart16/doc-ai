import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const dataBaseURI = process.env.DB_URI

async function databaseConnect() {
    try {
        const connectionInstance = await mongoose.connect(`${dataBaseURI}/${DB_Name}`)
        console.log(`Database Connected sucessfully ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Database Connection failed :db/index.js", error)
        process.exit(1)
    }    
}

export default databaseConnect