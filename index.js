const express=require('express');
const app=express();
const port=8000;


app.listen(port,function(err){
    if(err)
    {
        console.log(`Error in running the server: ${err}`);//interpolation method 
    }
    console.log(`Server is running on port:${port}`);
});

//there is node_module is not showing ya i also tried same thing happen ? then what is your doubt 
