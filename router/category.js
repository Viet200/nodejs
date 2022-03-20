import express from "express";
import { createCategory, deleteCategory, listCategory, updateCategory } from "../controller/category";

const router = express.Router();

router.post('/categories',createCategory);
router.get('/categories',listCategory);
router.delete('/categories/:id',deleteCategory);
router.put('/categories/:id',updateCategory);

export default router;
