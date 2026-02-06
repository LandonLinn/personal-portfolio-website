import mongoose, { trusted } from "mongoose";

const projectSchema = new mongoose.Schema(
    {message: String},
    {timestamps: true}
)

const ProjectModel = mongoose.model("project", projectSchema);

export default ProjectModel;