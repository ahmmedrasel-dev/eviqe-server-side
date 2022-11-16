import express from 'express'
const app = express();
import cors from 'cors';
import * as dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose';
const port = process.env.PORT || 8000;
app.use(cors())
import products from './products.js'
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRouter.js';


mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log('mongoose connected!')
})
app.use('/api/seed', seedRouter)
app.use('/api/products', productRouter)


app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  const product = products.find(item => item._id === id);
  res.send(product)
})
app.listen(port, () => {
  console.log('Server is runnign form port', port);
})