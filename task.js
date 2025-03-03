const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, enum: ["Pending", "In Progress", "Completed"], default: "Pending" },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
});

module.exports = mongoose.model("Task", TaskSchema);

const express = require("express");
const Task = require("../models/Task");
const router = express.Router();

// Create Task
router.post("/", async (req, res) => {
  try {
    const { title, description, assignedTo, project } = req.body;
    const task = new Task({ title, description, assignedTo, project });
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Tasks
router.get("/", async (req, res) => {
  const tasks = await Task.find().populate("assignedTo project", "name title");
  res.json(tasks);
});

// Update Task Status
router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
