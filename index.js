import express from 'express'
const app = express();
import cors from 'cors';
import * as dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose';
const port = process.env.PORT || 8000;
app.use(cors())
import products from './products.js'


mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log('mongoose connected!')
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/products', (req, res) => {
  res.send(products);
})

app.get('/product/:slug', (req, res) => {
  const { slug } = req.params;
  const product = products.find(item => item.slug === slug);
  res.send(product);
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  const product = products.find(item => item._id === id);
  res.send(product)
})
app.listen(port, () => {
  console.log('Server is runnign form port', port);
})