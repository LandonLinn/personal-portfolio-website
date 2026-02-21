// Requires
const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require('mongoose')

// Setup app
const app = express();

// Load environment Variables
dotenv.config();
PORT = process.env.PORT || 8080;
MONGO_URI = process.env.MONGO_URI;

// Setup middleware
app.use(cors());
app.use(express.json());

// API Test
app.get("/api", (req, res) => {
    res.json({ok: true})
})

// Connect mongoose
mongoose
    .connect(MONGO_URI, { dbName: "portfoliodb" })
    .then(() => {
    console.log("Starting DB");
    app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log("DB name:", mongoose.connection.name);
    })
}).catch((err) => console.error(err))


const projectSchema = new mongoose.Schema({
    slug: String,
    name: String,
    description: String,
    tags: [String],
    date: String,
    featured: Boolean,
    coverImg: String,
    links: {
        github: String,
        live: String
    },
    techStack: [String],
    features: [String],
    future_features: [String],
    challenges: [String],
    goals: [String],
    images: [String]
});

const ProjectModel = mongoose.model("projects", projectSchema);

app.get("/api/projects", async (req, res) => {
    const projects = await ProjectModel.find();
    res.json(projects);
});

app.get("/api/projects/:slug", async (req, res) => {
    const project = await ProjectModel.findOne({ slug: req.params.slug });
    if (!project) return res.status(404).json({message: "Project not found"}); 
    res.json(project);
});

