const express = require("express")
const app = express();

app.get("/", function(req,res){

    res.json([{
        name:"AWS",
        email: "aws@gmail.com"
    },
    {name:"bharat2",
    email:"bharat@gmail.com"
}]
)
})

app.listen(3000);