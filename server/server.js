import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Express Setup
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

// .env Variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.get("/", (req, res) => {
    res.send("API Running");
})

app.get("/api/health", (req, res) => res.json({ok:true}));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

(async () => {
    try{
        console.log("Connecting to Mongo...");
        await mongoose.connect(MONGO_URI, {serverSelectionTimeoutMS: 5000});
        console.log("Mongo Connected.")
    } catch (err){
        console.error("Mongo failed to connect:", err);
    }
})();