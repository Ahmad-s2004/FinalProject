const AccessoriesSchema = require("../models/accessoriesModel")


const showItem5 = async(req, res) => {
    let data = await AccessoriesSchema.find()
        res.send(data)
  }
module.exports = showItem5;