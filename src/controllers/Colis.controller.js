const colisModel = require('../models/colis.model'); // Import the model

// Create a new colis
const createColis = async (req, res) => {
  try {
    const colis = await colisModel.createColis(req.body);
    res.status(201).json(colis);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all colis
const getAllColis = async (req, res) => {
  try {
    const colis = await colisModel.getAllColis();
    res.status(200).json(colis);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a colis by ID
const getColisById = async (req, res) => {
  const { id } = req.params;
  try {
    const colis = await colisModel.getColisById(id);
    if (!colis) {
      return res.status(404).json({ message: 'Colis not found' });
    }
    res.status(200).json(colis);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a colis by ID
const updateColis = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedColis = await colisModel.updateColis(id, req.body);
    if (!updatedColis) {
      return res.status(404).json({ message: 'Colis not found' });
    }
    res.status(200).json(updatedColis);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a colis by ID
const deleteColis = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedColis = await colisModel.deleteColis(id);
    if (!deletedColis) {
      return res.status(404).json({ message: 'Colis not found' });
    }
    res.status(200).json({ message: 'Colis deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createColis,
  getAllColis,
  getColisById,
  updateColis,
  deleteColis,
};
