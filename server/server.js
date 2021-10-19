const express = require("express");
const { sequelize } = require("./models");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();

var corsOptions = {
  credentials: true,
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT;

// User
const user = require("./controllers/user");

app.get("/test", async (req, res) => res.send("prout"));
app.get("/api/test", async (req, res) => await user.test(req, res));

// Start Server

app.listen({ port: PORT }, async () => {
  console.log("Connecting...");
  await sequelize.authenticate();
  console.log("Running on port 8080 !");
});
