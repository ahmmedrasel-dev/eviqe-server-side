import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true
  },
  slug: {
    type: String,
    require: true,
    unique: true
  },
  image: {
    type: String,
    require: true,
  },
  brand: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  description: {
    type: Number,
    require: true,
  },
  stock: {
    type: Number,
    require: true
  },
  ratingsCount: {
    type: Number,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
  }

},
  {
    timestamps: true,
  }
);

const Product = mongoose.modal('Product', productSchema)
export default Product;