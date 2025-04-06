import databaseConnect from './db/index.js'
import app from './app.js'

databaseConnect()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log("Express App Started and Running... :src/index.js")
        console.log(`Access the server at PORT: http://localhost:${process.env.PORT || 8000}`)
    })
})
.catch((err)=>{
    console.log(`Some Error Occured ${err}`)
})