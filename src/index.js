


import express from "express";

import connectDb from "./db/me.js";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const app = express();

connectDb()
.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
        app.on("error", (err) => {
            console.error("Server error:", err);
            throw err;
        });
    });
})
.catch((err) => {
  console.error("Failed to connect to the database:", err);
  process.exit(1);
});