const express = require('express')
const User = require('../models/userModel')
const deleteItem = require('../controllers/userController2')
// User
const router = express.Router()


router.delete("/user/:id", deleteItem)

router.delete("/user/:id", async(req,res) =>{
    let result = await User.deleteOne({_id: req.params.id})
    if(result){
      res.send(result)
    }else{
      res.send({message:"no record found"})
    }
  })



module.exports = router