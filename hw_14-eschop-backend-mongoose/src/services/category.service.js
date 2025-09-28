import { Category } from '../db/models/Category.js';

export const createCategory = (data) => Category.create(data);
export const getAllCategories = () => Category.find().sort({ name: 1 });
