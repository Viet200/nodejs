// import { response } from "express";
import { response } from 'express';
import Product from '../models/products';
// const products = [
//     { "id": 1, "name": "Products1" },
//     { "id": 2, "name": "Products2" }
// ]
export const createProduct = async (request,response)=>{
    // console.log(request.body)
    try {
        const product = await Product(request.body).save();
        response.json(product);
    } catch (error) {
        response.status(400).json({message:"không thể tạo mới"})
    }
    // products.push(request.body);
    // response.json(product);
}
export const listProduct = async  (request, response) => {
    try {
        const product = await Product.find({}).exec();
        response.json(product);
    } catch (error) {
        response.status(400).json({message:"Khong the hien thi"});
    }
    // response.json(products);
}
export const listProductDetail = async (request, response) => {
    try {
        const product = await Product.findOne({_id:request.params.id}).exec();
        response.json(product);
    } catch (error) {
        response.status(400).json({message:"Khong the hiển thị"});
    }
   
}
export const deleteProduct = async (request, response) => {
    try {
        const product = await Product.findByIdAndDelete({_id:request.params.id}).exec();
        response.json(product);
    } catch (error) {
        response.status(400).json({message:"Khong the xóa"});
    }
    // const product = products.filter(item => item.id != +request.params.id);
    // response.json(product);
}
export const updateProduct = async (request,response)=>{
    try {
        const product = await Product.findOneAndUpdate({_id:request.params.id},request.body,{new:true}).exec();
        response.json(product);
    } catch (error) {
        response.status(400).json({message:"Khong the update"});
    }
    // response.json(products.map(item=>item.id===+request.params.id?request.body:item))
}
