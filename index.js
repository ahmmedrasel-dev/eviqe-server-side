import express from 'express'
const app = express();
import cors from 'cors';
const port = process.env.PORT || 8000;
app.use(cors())
import products from './products.js'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/products', (req, res) => {
  res.send(products);
})

app.listen(port, () => {
  console.log('Server is runnign form port', port);
})