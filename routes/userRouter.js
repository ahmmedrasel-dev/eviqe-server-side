import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { userTokenGenerator } from '../utilities/jweb_token.js';

const userRouter = express.Router();

userRouter.post('/signin', async (req, res) => {
  let { email, password } = req.body;

  let user = await User.findOne({ email: email });

  if (user) {
    if (bcrypt.compareSync(password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: userTokenGenerator(user)
      });
      return;
    }
  }
  res.status(401).json({
    status: 'failed',
    message: 'User Credentail Does not match!'
  })
});

userRouter.post('/signup', async (req, res) => {
  console.log(req.body)
  const { name, email, password } = req.body
  const newUser = new User({
    name,
    email,
    password: bcrypt.hashSync(password)
  })

  const user = await newUser.save();
  res.send({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: userTokenGenerator(user)
  });
})

export default userRouter;