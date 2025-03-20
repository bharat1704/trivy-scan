const express = require("express")
const app = express();

app.get("/", function(req,res){

    res.json([{
        name:"AWS",
        email: "aws@gmail.com"
    },
    {name:"AWS2",
    email:"aws2@gmail.com"
}]
)
})

app.listen(3000);