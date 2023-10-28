const HomeSchema = require("../models/homeModel")

const showItem7 = (req, res) => {
    // let data = HomeSchema.findbyId(req.params._id)
    //     res.send(data)
    fetchid = req.params.id;
    HomeSchema.find(({id:fetchid}),function(err,val){
        res.send(val)
    })
  }
module.exports = showItem7;