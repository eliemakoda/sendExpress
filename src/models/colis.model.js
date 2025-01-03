const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new colis
const createColis = async (data) => {
  return await prisma.colis.create({
    data: data,
  });
};

// Get all colis
const getAllColis = async () => {
  return await prisma.colis.findMany({
    include: {
      admin: true, // Optional, if you want to include the admin details as well
    },
  });
};

// Get a colis by ID
const getColisById = async (id) => {
  return await prisma.colis.findUnique({
    where: { id: parseInt(id) },
    include: {
      admin: true,
    },
  });
};

// Update a colis by ID
const updateColis = async (id, data) => {
  return await prisma.colis.update({
    where: { id: parseInt(id) },
    data: data,
  });
};

// Delete a colis by ID
const deleteColis = async (id) => {
  return await prisma.colis.delete({
    where: { id: parseInt(id) },
  });
};

module.exports = {
  createColis,
  getAllColis,
  getColisById,
  updateColis,
  deleteColis,
};
