import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'

const app=express()

await connectDB() //connection to database

app.use(cors()) //Middleware

app.get('/',(req,res)=>res.send("API working")) //routes
app.post('/clerk',express.json(),clerkWebhooks)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})