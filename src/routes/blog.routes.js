const express = require('express');
const BlogRouter = express.Router();
const blogController = require('../controllers/blog.controller');

// Route to get all blogs
BlogRouter.get('/', blogController.getBlogs);

// Route to create a new blog (with image upload)
BlogRouter.post('/', blogController.createBlog);

// Route to get a single blog by ID
BlogRouter.get('/:id', blogController.getBlogById);

// Route to update a blog (with image upload)
BlogRouter.put('/:id', blogController.updateBlog);

// Route to delete a blog by ID
BlogRouter.delete('/:id', blogController.deleteBlog);

module.exports = BlogRouter;
