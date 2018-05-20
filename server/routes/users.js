const express = require('express')
const fs = require('fs');
const {User} =require('../models');
const {Form}= require('multiparty');
const router= express.Router()


router.get("/self",(req,res)=>{
    res.json(req.user)
})
router.route("/:id")
.get(async(req,res)=>{
  const user=await User.findById(req.params.id)
  res.json(user)
}).patch((req,res)=>{
  const updates={}
  new Form().parse(req,async(err, fields, files)=>{
    let [about]= fields.about
    let [displayName]= fields.displayName
    let [photo]= files.file||[]
    const user=await User.findById(req.params.id)
    const exist=await User.checkHandleExists(displayName)
    if(exist&&user.displayName!=displayName){
      return res.status(401).json(new Error(`Name ${displayName} is already taken!`))
    }
    else{
      updates.displayName!=displayName
    }
    if(photo){
      updates.photo=fs.readFileSync(photo.path)
    }
    if(about){
      updates.about=about
    }
    await  user.update(updates)
    res.json(user)
  })
})
module.exports=router