const express = require('express');
const router = express.Router();

router.get('/products',(request,response)=>{
    response.send(`
    <h1>Sản phẩm</h1>
    <p>ID:</p>
    `)
})

module.exports =  router