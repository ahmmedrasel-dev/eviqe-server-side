import express from 'express';
import Product from '../models/productModels.js';

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  const product = await Product.find();
  res.send(product);
})

productRouter.get('/:slug', async (req, res) => {
  const { slug } = req.params;
  const product = await Product.findOne({ slug: slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ msg: 'Product Not Found' })
  }
})


productRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id)
  const product = await Product.findOne({ _id: id });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ msg: 'Product Not Found' })
  }
})
export default productRouter;