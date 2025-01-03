const express = require('express');
const ColisRouter = express.Router();
const colisController = require('../controllers/Colis.controller');

// Create a new colis
ColisRouter.post('/', colisController.createColis);

// Get all colis
ColisRouter.get('/', colisController.getAllColis);

// Get a colis by ID
ColisRouter.get('/:id', colisController.getColisById);

// Update a colis by ID
ColisRouter.put('/:id', colisController.updateColis);

// Delete a colis by ID
ColisRouter.delete('/:id', colisController.deleteColis);

module.exports = ColisRouter;
