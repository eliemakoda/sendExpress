const adminModel = require('../models/Admin.model');

// Get all admins
const getAdmins = async (req, res) => {
  try {
    const admins = await adminModel.getAllAdmins();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new admin
const createAdmin = async (req, res) => {
  try {
    const newAdmin = await adminModel.createAdmin(req.body);
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single admin by email
const getAdminByEmail = async (req, res) => {
  const { email } = req.query;
  try {
    const admin = await adminModel.getAdminByEmail(email);
    if (admin) {
      res.status(200).json(admin);
    } else {
      res.status(404).json({ error: 'Admin not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update admin by ID
const updateAdmin = async (req, res) => {
  const { id } = req.params; // ID from URL params
  try {
    const updatedAdmin = await adminModel.updateAdmin(id, req.body);
    res.status(200).json(updatedAdmin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete admin by ID
const deleteAdmin = async (req, res) => {
  const { id } = req.params; // ID from URL params
  try {
    await adminModel.deleteAdmin(id);
    res.status(200).json({ message: 'Admin deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAdmins,
  createAdmin,
  getAdminByEmail,
  updateAdmin,
  deleteAdmin,
};
