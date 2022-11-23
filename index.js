import express from "express"

import mongoose from 'mongoose'
import router from "./router.js";
import cors from 'cors';
const PORT = 5000;
const DB_URL = `mongodb+srv://Adreno123:Awseqd123@cluster0.2c9woxm.mongodb.net/?retryWrites=true&w=majority`

const app = express();

app.use(cors())
app.use(express.json({extended: true}))

app.use('/api',router)

async function startApp(){
    try{
        await mongoose.connect(DB_URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true})
        app.listen(PORT,() => console.log("Server start on port " + PORT))
    } catch (e) {
        console.log(e)
    }
}
startApp()