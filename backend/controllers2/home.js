const HomeSchema = require("../models/homeModel")

const showItem4 = async(req, res) => {
    let data = await HomeSchema.find()
        res.send(data)
  }
module.exports = showItem4;