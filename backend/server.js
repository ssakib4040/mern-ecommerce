const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db");

// middlware
connectDB();
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Api working");
});

app.use("/api/products", require("./routes/productRoutes"));

app.listen(PORT, () =>
  console.log(`Server is running successfully on port ${PORT}`)
);
