/*
server.js
Author: Joseph Cheatham
*/

//load evironment variables
require("dotenv").config();

//import packages
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { AsyncLocalStorage } = require("async_hooks");

//Create express app
const app = express();

//Middleware to allow requests from other servers
app.use(cors());

//Middleware to parse JSON data
app.use(express.json());

//Define POST endpoint
app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions", // OpenAI's endpoint
      {
        model: "gpt-3.5-turbo",
        messages: messages,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, //Secret key for OpenAI API
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to get response." });
  }
});

//Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
