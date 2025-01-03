const express = require("express");
const ServiceRouter = express.Router();
const serviceController = require("../controllers/services.controller");

// Route to get all services
ServiceRouter.get("/", serviceController.getServices);

// Route to create a new service
ServiceRouter.post("/", serviceController.createService);

// Route to get a single service by ID
ServiceRouter.get("/:id", serviceController.getServiceById);

// Route to update a service by ID
ServiceRouter.put("/:id", serviceController.updateService);

// Route to delete a service by ID
ServiceRouter.delete("/:id", serviceController.deleteService);

module.exports = ServiceRouter;
