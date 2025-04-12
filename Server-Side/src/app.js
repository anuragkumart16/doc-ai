import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import { dataLimit } from "./constants.js";

const app = express()

app.use(cors({
    origin: process.env.ALLOWED_ORIGINS
}))

app.use(express.json({limit: dataLimit}))
app.use(express.urlencoded({extended:true, limit: dataLimit}))
app.use(express.static('public'));
app.use(cookieParser());

// api versions 
const v1 = '/api/v1'


// Router 
import userRouter from "./routes/user.routes.js"
import healthCheckRouter from "./routes/healthcheck.routes.js"

// router middlewares
app.use(`${v1}/healthcheck`,healthCheckRouter)  //healthcheck endpoint
app.use(`${v1}/user`,userRouter)

export default app