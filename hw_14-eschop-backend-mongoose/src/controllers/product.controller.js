import * as productService from '../services/product.service.js';

export const createProductController = async (req, res, next) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (e) {
    next(e);
  }
};

export const getProductsController = async (req, res, next) => {
  try {
    const items = await productService.getAllProducts();
    res.json(items);
  } catch (e) {
    next(e);
  }
};
