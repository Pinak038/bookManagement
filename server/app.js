const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const blogRouter = require("./routes/BlogRoutes");

const app = express();


//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/books", blogRouter);

//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/bookdb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.listen(3001, () => {
  console.log(`Server is running on port ${3001}`);
});

module.exports = app;
