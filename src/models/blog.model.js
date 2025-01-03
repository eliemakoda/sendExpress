const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create a new blog post
const createBlog = async (data) => {
  try {
    return await prisma.blog.create({
      data: data,
    });
  } catch (error) {
    throw new Error("Error creating blog post: " + error.message);
  }
};

// Get all blog posts
const getAllBlogs = async () => {
  try {
    return await prisma.blog.findMany({
      include: {
        author: true, // Include author details (Admin)
      },
    });
  } catch (error) {
    throw new Error("Error fetching blogs: " + error.message);
  }
};

// Get a blog post by ID
const getBlogById = async (id) => {
  try {
    return await prisma.blog.findUnique({
      where: { id },
      include: {
        author: true, // Include author details
      },
    });
  } catch (error) {
    throw new Error("Error fetching blog by ID: " + error.message);
  }
};

// Update a blog post
const updateBlog = async (id, data) => {
  try {
    return await prisma.blog.update({
      where: { id },
      data: data,
    });
  } catch (error) {
    throw new Error("Error updating blog post: " + error.message);
  }
};

// Delete a blog post
const deleteBlog = async (id) => {
  try {
    return await prisma.blog.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error("Error deleting blog post: " + error.message);
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
