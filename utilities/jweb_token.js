import jwt from 'jsonwebtoken';

export const userTokenGenerator = (user) => {
  return jwt.sign({ user }, process.env.SECRET_KEY, { expiresIn: '30d' })
}

