const serviceModel = require('../models/services.model');

// Get all services
const getServices = async (req, res) => {
  try {
    const services = await serviceModel.getAllServices();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new service
const createService = async (req, res) => {
  try {
    const newService = await serviceModel.createService(req.body);
    res.status(201).json(newService);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single service by ID
const getServiceById = async (req, res) => {
  const { id } = req.params;
  try {
    const service = await serviceModel.getServiceById(id);
    if (service) {
      res.status(200).json(service);
    } else {
      res.status(404).json({ error: 'Service not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update service by ID
const updateService = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedService = await serviceModel.updateService(id, req.body);
    res.status(200).json(updatedService);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete service by ID
const deleteService = async (req, res) => {
  const { id } = req.params;
  try {
    await serviceModel.deleteService(id);
    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getServices,
  createService,
  getServiceById,
  updateService,
  deleteService,
};
