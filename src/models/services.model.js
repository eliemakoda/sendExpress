const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new service
const createService = async (data) => {
  try {
    return await prisma.service.create({
      data: data,
    });
  } catch (error) {
    throw new Error('Error creating service: ' + error.message);
  }
};

// Get all services
const getAllServices = async () => {
  try {
    return await prisma.service.findMany();
  } catch (error) {
    throw new Error('Error fetching services: ' + error.message);
  }
};

// Get a service by ID
const getServiceById = async (id) => {
  try {
    return await prisma.service.findUnique({
      where: { id },
    });
  } catch (error) {
    throw new Error('Error fetching service by ID: ' + error.message);
  }
};

// Update a service
const updateService = async (id, data) => {
  try {
    return await prisma.service.update({
      where: { id },
      data: {
        nom: data.nom,
        description: data.description,
      },
    });
  } catch (error) {
    throw new Error('Error updating service: ' + error.message);
  }
};

// Delete a service
const deleteService = async (id) => {
  try {
    return await prisma.service.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error('Error deleting service: ' + error.message);
  }
};

module.exports = {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
};
