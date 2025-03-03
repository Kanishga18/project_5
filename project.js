const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  manager: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  team: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Project", ProjectSchema);

const express = require("express");
const Project = require("../models/Project");
const router = express.Router();

// Create Project
router.post("/", async (req, res) => {
  try {
    const { name, description, manager, team } = req.body;
    const project = new Project({ name, description, manager, team });
    await project.save();
    res.json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Projects
router.get("/", async (req, res) => {
  const projects = await Project.find().populate("manager team", "name email");
  res.json(projects);
});

module.exports = router;
