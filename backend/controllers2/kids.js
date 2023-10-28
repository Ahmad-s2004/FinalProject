const KidsSchema = require("../models/kidsModel")


const showItem3 = async(req, res) => {
    let data = await KidsSchema.find()
        res.send(data)
  }
module.exports = showItem3;