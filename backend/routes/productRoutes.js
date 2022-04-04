const router = require("express").Router();

const {
  getAllProducts,
  getProductById,
} = require("../controllers/productControllers");

router.post("/", getAllProducts);

router.post("/:id", getProductById);

module.exports = router;
