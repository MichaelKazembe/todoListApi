"use strict";

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

const Task = require("./api/models/todoListModel");
const routes = require("./api/routes/todoListRoutes");

const app = express();
const port = process.env.PORT || 3000;
const URL = process.env.MONGO_URL;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect(URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(" MongoDB connection error:", err));

// Register Routes
routes(app);

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to the TodoList API!");
});

// 404 Route
app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

// Start Server
app.listen(port, () => {
  console.log(` TodoList RESTful API server started on: ${port}`);
});
