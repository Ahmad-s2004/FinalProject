const WomenSchema = require("../models/womenModel")


const showItem = async(req, res) => {
          let data = await WomenSchema.find()
              res.send(data)
        }
    module.exports = showItem;