const express = require('express');
const app = express();
const PORT = 3001;


app.get('/', (req, res)=>{
    return res.json({
        status : true,
        message: "Welcome To Node Server"
    });
})

app.listen(PORT, ()=>{
    console.log(`Node Server Started On Port ${PORT}`)
});