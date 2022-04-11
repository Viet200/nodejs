import express from 'express';
import homeRoute from './router/home';
import productRoute from './router/products';
import mongoose from 'mongoose';
import categoryRoute from './router/category';
import authRouter from './router/auth';


const app = express();

app.use(express.json());
app.use(cors());
app.use(homeRoute);
app.use(productRoute);
app.use(categoryRoute);
app.use(authRouter);

mongoose.connect('mongodb://127.0.0.1:27017/we16307');

const port = 3001;
app.listen(port, () =>{
    console.log(`server is running on ${port}`);
});
