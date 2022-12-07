import jwt from 'jsonwebtoken';

export const userTokenGenerator = (user) => {
  return jwt.sign({ user }, process.env.SECRET_KEY, { expiresIn: '30d' })
}

export const varifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ message: 'Not Allow! Unauthorization Access!' })
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.SECRET_KEY, function (error, decode) {
    if (error) {
      return res.status(403).send({ message: 'Not Allow! Forbidden Access!' })
    }

    req.decode = decode;
    next()
  })
}