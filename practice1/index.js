const  express = require("express")  // Require Express

const app = express()

app.listen(3000,function()
{
console.log("Server Started")
//res.send("You Entered to My Server")
})

app.get("/send",function(req,res){
res.send("Message")
})

app.get("/",function(req,res){
    res.send("Wrong Path")
})