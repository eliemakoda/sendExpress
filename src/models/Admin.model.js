const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new admin
const createAdmin = async (data) => {
  try {
    return await prisma.admin.create({
      data:data,
    });
  } catch (error) {
    throw new Error('Error creating admin: ' + error.message);
  }
};

// Get all admins
const getAllAdmins = async () => {
  try {
    return await prisma.admin.findMany();
  } catch (error) {
    throw new Error('Error fetching admins: ' + error.message);
  }
};

// Get an admin by email
const getAdminByEmail = async (email) => {
  try {
    return await prisma.admin.findUnique({
      where: { email },
    });
  } catch (error) {
    throw new Error('Error fetching admin by email: ' + error.message);
  }
};

// Update an admin
const updateAdmin = async (id, data) => {
  try {
    return await prisma.admin.update({
      where: { id },
      data: data,
    });
  } catch (error) {
    throw new Error('Error updating admin: ' + error.message);
  }
};

// Delete an admin
const deleteAdmin = async (id) => {
  try {
    return await prisma.admin.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error('Error deleting admin: ' + error.message);
  }
};

module.exports = {
  createAdmin,
  getAllAdmins,
  getAdminByEmail,
  updateAdmin,
  deleteAdmin,
};
