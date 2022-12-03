import express from 'express';
import users from '../factory/users.js';
import User from '../models/User.js';
const userSeederRoute = express.Router();


userSeederRoute.get('/', async (req, res) => {
  await User.deleteMany({});
  await User.insertMany(users);
  res.status(200).json({
    status: 'success',
    message: 'User Successfully Seeding to Databse!'
  });
})

export default userSeederRoute;