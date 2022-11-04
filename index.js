const { application } = require("express");
const express = require("express");

const app = express();

app.use(express.json())

const names = [
    {
      "name": "munsif"
    },
    {
      "name": "hamza"
    },
    {
      "name": "ayaz"
    },
    {
      "name": "dummyname"
    },
    {
      "name": "abraz"
    }
  ]


app.get("/user", (req, res)=> {

    return res.status(200).json({status:true, success:200, user:names});

//    res.send("<h1>Successfully</h1>")
    
})



app.post("/add", (req, res)=> {
console.log(req.body)
    let UserName = req.body.UserName;
    console.log(UserName)
    // let UserName = "ayaz";
    let obj = names.find(o => o.name === UserName);
    console.log(obj)
    if(obj)
    {
        return res.status(500).json({status:false, success:500, message:"user Allready Exist"});
    }
    else{

        names.push({name:UserName});
        return res.status(200).json({status:true, success:200, user:names});
    }
    // res.send("<h1>Hello World</h1>")
})





app.listen(3000 , ()=> {

    console.log(" server start at port 3000");
})