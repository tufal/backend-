

import app from "./app.js"


import connectDb from "./db/me.js";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });



connectDb()
.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`http//localhost:${process.env.PORT}`);
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


export {app};