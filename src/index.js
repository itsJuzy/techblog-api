const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT;
const app = express();

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const blogRouter = require("./routes/blogRoutes");
app.use("/api/book", blogRouter);
//const authorRouter = require("./routes/authorRoutes");
//app.use("/api/author", authorRouter);

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
