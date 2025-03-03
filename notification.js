const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
  message: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  read: { type: Boolean, default: false },
});

module.exports = mongoose.model("Notification", NotificationSchema);

const express = require("express");
const Notification = require("../models/Notification");
const router = express.Router();

// Create Notification
router.post("/", async (req, res) => {
  try {
    const { message, user } = req.body;
    const notification = new Notification({ message, user });
    await notification.save();
    res.json(notification);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get Notifications
router.get("/:userId", async (req, res) => {
  const notifications = await Notification.find({ user: req.params.userId });
  res.json(notifications);
});

module.exports = router;
