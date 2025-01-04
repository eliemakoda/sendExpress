const express = require("express");
const path = require("path");
require("dotenv").config();
const GenerateClient = (clientApp) => {
  const clientAssetsPath = path.join(__dirname, "src", "assets", "build");

  clientApp.use("/client", express.static(clientAssetsPath));

  clientApp.get("/client/*", (req, res) => {
    res.sendFile(path.join(clientAssetsPath, "index.html"));
  });
  return clientApp;
};

module.exports = { GenerateClient };
