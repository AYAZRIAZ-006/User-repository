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
    
})



app.post("/add", (req, res)=> {
console.log(req.body)
    const UserName = req.body.UserName;

      const findName = names.some((item)=> {
        return item.name == UserName;
      })
      console.log(findName);
      if(findName)
      {
        console.log(UserName);
        return res.status(500).json({status:false, success:500, message:"user Allready Exist"});
      }
      else {
        // console.log(" found");
        names.push({name:UserName});
      return res.status(200).json({status:true, success:200, user:names});
    }

    // console.log(UserName)
    // let obj = names.find(o => o.name === UserName);
    // console.log(obj)
    // if(obj)
    // {
    //     return res.status(500).json({status:false, success:500, message:"user Allready Exist"});
    // }
    // else{

    //     // names.push({name:UserName});
    //      names = [names,...UserName];
    //     return res.status(200).json({status:true, success:200, user:names});
    // }
})





app.listen(3000 , ()=> {

    console.log(" server start at port 3000");
})