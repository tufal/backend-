import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials:true
}))


app.use(express.json({limit:"10mb"}));
app.use(express.urlencoded({extended:true,limit:"10mb"}));
app.use(express.static("public"));
app.use(cookieParser());

import userRouter from "./routes/user_routes.js"


app.use('/api/v1/user',userRouter);











export default app;