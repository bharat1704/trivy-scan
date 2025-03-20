const express = require("express")
const app = express();

app.get("/", function(req,res){

    res.json([{
        name:"AWS",
        email: "aws@gmail.com"
    },
    {
        name:"Bharat Saini",
        email:"saini@gmail.com"
}]
)
})

app.listen(3000);