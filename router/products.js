import express from "express";
// import { response } from "express";
// import { request } from "express";
import { userById } from "../controller/auth";
import { createProduct, listProduct, listProductDetail, deleteProduct, updateProduct } from '../controller/products'
import { isAdmin, isAuth, requiredSignin } from "../middlewares/checkAuth";
const router = express.Router();
router.get('/product', listProduct)
router.get('/product/:id', listProductDetail)
router.post("/product/:userId", requiredSignin, isAuth, isAdmin, createProduct);
router.delete("/product/:id", deleteProduct)
router.put("/product/:id", updateProduct)

router.param("userId", userById)
export default router;