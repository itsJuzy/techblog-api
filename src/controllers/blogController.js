const Blog = require("../models/blogModel");

const getBlogs = (req, res) => {
  res.status(200).json({ message: "Fetches all Blogs" });
};

module.exports = {
  getBlogs,
};
