const express=require("express");
const app=express();
app.get("/api",(req,res)=>{
res.json({"users":["userOne","userTwo","userThree","userFour"]})
})

//creating a webserver::3000
app.listen(3000,()=>{console.log("Server started on port 3000")});
