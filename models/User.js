import mongoose from "mongoose";

const userSchame = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  isAdmin: {
    type: Boolean,
    default: false,
    require: true
  }
}, {
  timestamps: true
})

const User = mongoose.model("User", userSchame);
export default User;