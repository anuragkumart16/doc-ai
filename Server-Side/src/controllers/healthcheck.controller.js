import { asyncHandler } from "../utils/asyncHandler.js";


// when method is GET
const healthCheck = asyncHandler(async (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is running",
        statusCode: 200
    })
})


// when method is other than GET
const notAllowed = asyncHandler(async (req, res) => {
    const method = req.method
    res.status(405).json({
        success: false,
        message: `${method} method is not allowed`,
        statusCode: 405
    })
})


export {healthCheck,notAllowed}