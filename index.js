const express = require('express');
const path = require('path');

const server =express();
server.get('/',(req,res)=>{
    res.sendFile(
        path.resolve('index.html')
    )
});
server.listen(80);
