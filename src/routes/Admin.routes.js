const express = require("express");
const AdminRouter = express.Router();
const adminController = require("../controllers/Admin.controller");

// Route to get all admins
AdminRouter.get("/", adminController.getAdmins);

// Route to get an admin by email
AdminRouter.get("/email", adminController.getAdminByEmail);

// Route to create a new admin
AdminRouter.post("/", adminController.createAdmin);

// Route to update an admin by ID
AdminRouter.put("/:id", adminController.updateAdmin);

// Route to delete an admin by ID
AdminRouter.delete("/:id", adminController.deleteAdmin);

module.exports = AdminRouter;
