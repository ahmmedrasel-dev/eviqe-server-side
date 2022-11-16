import express from "express";
import Product from "../models/productModels.js";
import products from "../products.js";

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const product = await Product.insertMany(products);
  res.send(product)
});

export default seedRouter;
