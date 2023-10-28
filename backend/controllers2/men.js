const MenSchema = require("../models/menModel")

const showItem2 = async(req, res) => {
        let data = await MenSchema.find()
            res.send(data)
      }
    module.exports = showItem2;