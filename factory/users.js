import bcrypt from 'bcryptjs';
const users = [
  {
    name: "Rasel Ahmmed",
    email: "rahmmed.info@gmail.com",
    password: bcrypt.hashSync("1234567890@#"),
    isAdmin: true
  },
  {
    name: "Romon Ahmmed",
    email: "romon.ahmmed@gmail.com",
    password: bcrypt.hashSync("123456789"),
    isAdmin: false
  },
  {
    name: "Salman Ahmmed",
    email: "salman.ahmmed@gmail.com",
    password: bcrypt.hashSync("123456789"),
    isAdmin: false
  },
  {
    name: "Mamun Hasna",
    email: "mamun.hasan@gmail.com",
    password: bcrypt.hashSync("123456789"),
    isAdmin: false
  },
  {
    name: "Mahabubur Rahman",
    email: "mahabubur.rahman@gmail.com",
    password: bcrypt.hashSync("123456789"),
    isAdmin: false
  },
  {
    name: "Saydul Islam",
    email: "sydul.islam@gmail.com",
    password: bcrypt.hashSync("123456789"),
    isAdmin: false
  },
  {
    name: "Sajmin Akter",
    email: "sajmin.akter@gmail.com",
    password: bcrypt.hashSync("123456789"),
    isAdmin: false
  }
]

export default users;