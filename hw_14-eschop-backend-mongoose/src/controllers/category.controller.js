import * as categoryService from '../services/category.service.js';

export const createCategoryController = async (req, res, next) => {
  try {
    const category = await categoryService.createCategory(req.body);
    res.status(201).json(category);
  } catch (e) {
    next(e);
  }
};

export const getCategoriesController = async (req, res, next) => {
  try {
    const items = await categoryService.getAllCategories();
    res.json(items);
  } catch (e) {
    next(e);
  }
};
