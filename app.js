// include thư viện http
import express from 'express';
import homeRoute from './router/home';
import productRoute from './router/products';
import mongoose from 'mongoose';


const app = express();

app.use(express.json());
app.use(homeRoute);
app.use(productRoute);

mongoose.connect('mongodb://127.0.0.1:27017/we16307');

// khởi tạo server
// const server = http.createServer((request,response)=>{
//     console.log(request.url);
//     if(request.url==="/"){
//         response.setHeader("Content-Type","text/html");
//         response.write("<h3>Home Page</h3>");
//         response.end();
//     } if(request.url==="/products"){
//         response.setHeader("Content-Type","text/html");
//         response.write("<h3>product Page</h3>");
//         response.end();
//     }
//     if(request.url==="/news"){
//         response.setHeader("Content-Type","text/html");
//         response.write("<h3>News Page</h3>");
//         response.end();
//     }
// });

// Lắng nghe cổng thực thi

const port = 3001;
app.listen(port, () =>{
    console.log(`server is running on ${port}`);
});
