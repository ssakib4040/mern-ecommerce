const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db");

// middlware
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api working");
});


app.use("/products", require("./routes/productRoutes"));

app.listen(PORT, () =>
  console.log(`Server is running successfully on port ${PORT}`)
);
