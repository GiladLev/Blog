import express from "express";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";

const app = express(express.json())

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);


app.listen(8800, ()=>{
    console.log("Connected!");
})