import express from 'express'
const app = express();
import cors from 'cors';
import * as dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose';
const port = process.env.PORT || 8000;
app.use(cors())
app.use(express.json());
import productRouter from './routes/productRouter.js';
import proudctSeederRoute from './seeder/product.seeder.js';
import userSeederRoute from './seeder/user.seeder.js';
import userRouter from './routes/userRouter.js';


mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log('mongoose connected!')
})

app.use('/api/seed/products', proudctSeederRoute);
app.use('/api/seed/users', userSeederRoute);
app.use('/api/products', productRouter)
app.use('/api/user', userRouter)

app.listen(port, () => {
  console.log('Server is runnign form port', port);
})