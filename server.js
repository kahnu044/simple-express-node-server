const express = require('express');
const app = express();
const PORT = 3001;



app.listen(PORT, ()=>{
    console.log(`Node Server Started On Port ${PORT}`)
});