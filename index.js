const express = require("express")
const app = express();

app.get("/", function(req,res){

    res.json({
        name:"AWS",
        email: "AWs@gmail.com"
    })
})

app.listen(3000);