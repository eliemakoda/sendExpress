const express = require("express");
const path = require("path");
require("dotenv").config();
const GenerateAdmin = (adminApp) => {
  const adminAssetsPath = path.join(__dirname, "src", "admin", "build");

  adminApp.use("/admin", express.static(adminAssetsPath));

  adminApp.get("/admin/*", (req, res) => {
    res.sendFile(path.join(adminAssetsPath, "index.html"));
  });
  return adminApp;
};

module.exports = { GenerateAdmin };
