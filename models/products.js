import mongoose,{ObjectId} from "mongoose";
const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    categoryID:{
        type:ObjectId,
        ref:'categories'
    }
});

export default mongoose.model('Product',productSchema);