"use strict";

const mongoose = require("mongoose");
const Task = mongoose.model("Tasks");

// Get all tasks
exports.list_all_tasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.json(tasks);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Create a new task
exports.create_a_task = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const task = await newTask.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Get one task
exports.read_a_task = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Update a task
exports.update_a_task = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.taskId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Delete a task
exports.delete_a_task = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.taskId);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json({ message: "Task successfully deleted!" });
  } catch (err) {
    res.status(500).send(err);
  }
};
