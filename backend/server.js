import express from 'express'
import {connectDB } from './Models/db.js'
import dotenv from 'dotenv'
import cros from 'cors'
import bodyParser from 'body-parser'
import AuthRouter from './Router/AuthRouter.js'
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cros());
app.use('/auth',AuthRouter)
const PORT = 8080;
connectDB();


app.get('/',(req,res)=>{
    res.send("Express Server Found")
})

app.get('/terms',(req,res)=>{
    res.send("Accepted Terms and conditions")
})

app.listen(PORT)