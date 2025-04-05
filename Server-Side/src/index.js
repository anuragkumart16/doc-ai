import databaseConnect from './db/index.js'

databaseConnect()
.then(()=>{
    console.log('everything working')
})
.catch((err)=>{
    console.log(`Some Error Occured ${err}`)
})