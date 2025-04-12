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


// Router 
import userRouter from "./routes/user.routes.js"
import healthCheckRouter from "./routes/healthcheck.routes.js"

// router middlewares
app.use('/api/v1/healthcheck',healthCheckRouter)
app.use('/api/v1/user',userRouter)

export default app