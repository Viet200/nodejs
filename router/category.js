import express from "express";
import { createCategory, deleteCategory, listCategory, listCategoryDetail, updateCategory } from "../controller/category";

const router = express.Router();

router.post('/categories',createCategory);
router.get('/categories',listCategory);
router.get('/categories/:id',listCategoryDetail);
router.delete('/categories/:id',deleteCategory);
router.put('/categories/:id',updateCategory);

export default router;
