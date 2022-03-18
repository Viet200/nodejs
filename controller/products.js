// import { response } from "express";
import { response } from 'express';
import Product from '../models/products';
// const products = [
//     { "id": 1, "name": "Products1" },
//     { "id": 2, "name": "Products2" }
// ]

export const listProduct =  (request, response) => {
    
    // response.json(products);
}
export const listProductDetail = (request, response) => {
    const product = products.find(item => item.id === +request.params.id);
    response.json(product);
}
export const deleteProduct = (request, require) => {
    const product = products.filter(item => item.id != +request.params.id);
    response.json(product);
}
export const updateProduct = (request,require)=>{
    response.json(products.map(item=>item.id===+request.params.id?request.body:item))
}
export const createProduct = async (request,require)=>{
    // console.log(request.body)
    try {
        const product = await Product(request.body).save();
        response.json(product);
    } catch (error) {
        response.status(400).json({message:"Loi"})
    }
    // products.push(request.body);
    // response.json(product);
}