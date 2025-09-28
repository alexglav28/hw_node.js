import { Product } from '../db/models/Product.js';

export const createProduct = (data) => Product.create(data);
export const getAllProducts = async () => {
  const products = await Product.find({})
    .populate('category', 'name -_id') 
    .lean(); 

  return products.map(p => ({
    _id: p._id,
    name: p.name,
    price: p.price,
    category: p.category?.name, 
    createdAt: p.createdAt,
    updatedAt: p.updatedAt,
  }));
};
