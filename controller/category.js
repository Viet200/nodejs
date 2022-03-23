import { request } from 'express';
import { response } from 'express';
import categories from '../models/category';
import Product from '../models/products';

export const  createCategory =  async (request,response) =>{
    try {
        const category = await categories(request.body).save();
        response.json(category);
    } catch (error) {
        response.status(400).json({message:"Khong add dc"});
    }
}
export const listCategory = async (request,response) =>{
    try {
        const category = await categories.find().exec();
        response.json(category);
    } catch (error) {
        response.status(400).json({message:"Không list được"});
    }
}
export const listCategoryDetail = async (request,response) =>{
    try {
        const category = await categories.findOne({_id:request.params.id}).exec();
        const product = await Product.find({category}).populate("categoryID").exec();
        response.json({category,product});
    } catch (error) {
        response.status(400).json({message:"Không list được"});
    }
}
export const deleteCategory = async (request,response)=>{
    try {
        const category = await categories.findByIdAndDelete({_id:request.params.id}).exec();
        response.json(category);
    } catch (error) {
        response.status(400).json({message:"Khong xoa duoc"});
    }
}
export const updateCategory = async (request,response)=>{
    try {
        const category = await categories.findOneAndUpdate({_id:request.params.id},request.body,{new:true}).exec();
        response.json(category);
    } catch (error) {
        response.status(400).json({message:"Khong update đc"})
    }
}