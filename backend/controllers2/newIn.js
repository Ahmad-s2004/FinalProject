const NewInSchema = require("../models/newInModel")


const showItem6 = async(req, res) => {
    let data = await NewInSchema.find()
        res.send(data)
  }
module.exports = showItem6;