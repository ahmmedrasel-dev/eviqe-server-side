import express from 'express';
import Product from '../models/Product.js';

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  const product = await Product.find();
  res.send(product);
})


productRouter.get('/:slug', async (req, res) => {
  const { slug } = req.params;
  console.log(typeof (slug))
  const product = await Product.findOne({ slug: slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ msg: 'Product Not Found' })
  }
})


export default productRouter;