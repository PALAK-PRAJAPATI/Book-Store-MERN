import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/route.js"

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT;
const URL = process.env.URL;


mongoose.connect(URL)
.then(()=>{
    console.log("Data Base Connected Successfully...")
})
.catch((error)=>{
    console.log(error)
})

app.listen(PORT,()=>{
    console.log(`Server is Running on port: ${PORT}`)
})


app.use("/api",route);