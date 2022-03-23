import express from "express";
// import { response } from "express";
// import { request } from "express";
import { createProduct, deleteProduct, listProduct, listProductDetail, updateProduct } from "../controller/products";
const router = express.Router();


router.get('/product',listProduct )
router.get('/product/:id',listProductDetail )
router.post("/product",createProduct )
router.delete("/product/:id",deleteProduct )
router.put("/product/:id",updateProduct)
export default router;