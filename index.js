const express = require("express")
const app = express();

app.get("/", function(req,res){

    res.json([{
        name:"test1",
        email: "test1@gmail.com"
    },
    {
        name:"bharat",
        email:"bharat@gmail.com"
}]
)
})

app.listen(3000);