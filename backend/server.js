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

// heroku
if (process.env.NODE_ENV == "production") {
  const path = require("path");

  app.use(express.static(path.join(__dirname, "../", "frontend", "build")));

  app.get("/*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    );
  });
}

app.get("/", (req, res) => {
  res.send("Api working");
});

app.use("/api/products", require("./routes/productRoutes"));

app.listen(PORT, () =>
  console.log(`Server is running successfully on port ${PORT}`)
);
