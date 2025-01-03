const blogModel = require('../models/blog.model');

// Function to handle image upload using multer
const multer = require('multer');
const path = require('path');

// Setup for file upload (store in 'uploads' folder)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to filename
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      return cb(new Error('Only image files are allowed.'));
    }
  },
}).single('image');

// Get all blog posts
const getBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.getAllBlogs();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new blog post
const createBlog = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    const image = req.file ? `/uploads/${req.file.filename}` : null;

    try {
      const newBlog = await blogModel.createBlog({
        title: req.body.title,
        description: req.body.description,
        authorId: req.body.authorId, // admin's ID
        image,
        comments: req.body.comments,
      });
      res.status(201).json(newBlog);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
};

// Get a single blog post by ID
const getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await blogModel.getBlogById(id);
    if (blog) {
      res.status(200).json(blog);
    } else {
      res.status(404).json({ error: 'Blog not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a blog post
const updateBlog = async (req, res) => {
  const { id } = req.params;
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    const image = req.file ? `/uploads/${req.file.filename}` : req.body.image;

    try {
      const updatedBlog = await blogModel.updateBlog(id, {
        title: req.body.title,
        description: req.body.description,
        image,
        comments: req.body.comments,
      });
      res.status(200).json(updatedBlog);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
};

// Delete a blog post
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    await blogModel.deleteBlog(id);
    res.status(200).json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
};
