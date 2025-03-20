const express = require("express")
const app = express();

app.get("/", function(req,res){

    res.json({
        name:"Test",
        email: "test@gmail.com"
    })
})

app.listen(3000);