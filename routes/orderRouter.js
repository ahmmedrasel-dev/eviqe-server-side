import express from 'express';
import Order from '../models/Order.js';
import { varifyToken } from '../utilities/jweb_token.js';
const orderRouter = express.Router();

orderRouter.post('/', varifyToken, async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod, productPrice, tax, shippingPrice, totalPrice } = req.body


  const newOrder = new Order({
    orderItems: orderItems.map(item => ({ ...item, product: item._id })),
    shippingInfo: shippingAddress,
    paymentMethod: paymentMethod,
    productPrice: productPrice,
    tax: tax,
    shippingPrice: shippingPrice,
    totalPrice: totalPrice,
    user: req.body.user
  })

  const order = await newOrder.save();
  res.status(201).send({ msg: "New Order Created!", order })
})

export default orderRouter;