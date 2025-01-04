const express = require("express");
require("dotenv").config();
const { GenerateClient } = require("./client");
const { GenerateAdmin } = require("./admin");
const { GenerateApp } = require("./api");
// const server = express();

const PORT = process.env.PORT || 3000;
const app = express()
const server = GenerateApp(app);
const adminApp = GenerateAdmin(app);
const clientApp = GenerateClient(app);
// server.use("/api", app);
// server.use("/", clientApp);

server.use((err, req, res, next) => {
  console.error("Unhandled error:", err.message);
  res.status(500).send({ msg: "An internal server error occurred." });
});

server.use((req, res) => {
  res.status(404).send({ msg: "Route not found." });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
