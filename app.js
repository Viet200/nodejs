// include thư viện http

const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

const homeRoute = require('./router/home')
app.use(homeRoute);

app.get('/products',(request,response)=>{
    response.send(`
    <h1>Product</h1>
    <p>Page</p>
    `)
})
app.get('/products/:productID',(request,response)=>{
    response.send(`
    <h1>Detail</h1>
    <p>Page</p>
    ${request.params.productID}
    `)
})
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
server.listen(port, () =>{
    console.log(`server is running on ${port}`);
});
