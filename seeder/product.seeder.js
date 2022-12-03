import express from 'express';
import Product from '../models/Product.js';
import products from '../factory/products.js';
const proudctSeederRoute = express.Router();


proudctSeederRoute.get('/', async (req, res) => {
  await Product.deleteMany({});
  await Product.insertMany(products);
  res.status(200).json({
    status: 'success',
    message: 'Products Successfully Seeding to Databse!'
  });
})

export default proudctSeederRoute;