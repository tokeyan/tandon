const router = require('express').Router()
const User = require('../model/user')
const verification = require('../verification')

router.put("/update/:id",verification,async(req,res) => {
    try{
       const id = req.params.id
       await User.findByIdAndUpdate(id,{$set : req.body})
       res.status(200).json("update successfully")
      }
      catch(err){
        res.status(500).json(err)
      }  
})


router.delete("/delete/:id",verification,async(req,res) => {
    try{
        const id = req.params.id
        await User.findByIdAndDelete(id)
        res.status(200).json("user deleted")
      }
      catch(err){
        res.status(500).json(err)
      }  
})

router.get("/getuser/:id",verification,async(req,res) => {
    try{
        const id = req.params.id
          const data = await User.findById(id)
          if(data){
            res.status(200).json(data)
          }
          else{
            res.status(201).json("user not found")
          }
      }
      catch(err){
        res.status(500).json(err)
      }  
})



router.get("/getusers",verification,async(req,res) => {
    try{
          const data = await User.find()
          if(data){
            res.status(200).json(data)
          }
          else{
            res.status(201).json("user not found")
          }
      }
      catch(err){
        res.status(500).json(err)
      }  
})


module.exports = router