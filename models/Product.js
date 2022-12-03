import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
    trim: true
  },
  slug: {
    type: String,
    require: true,
    trim: true
  },
  category: {
    type: String,
    require: true
  },
  brand: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true,
  },
  stock: {
    type: Number,
    require: true
  },
  ratings: {
    type: Number,
    require: true
  },
  ratingsCount: {
    type: Number,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  img: {
    type: String,
    require: true
  }
},
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema)
export default Product;