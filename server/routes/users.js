const express = require('express')
const {User} =require('../models');

const router= express.Router()


router.get("/self",(req,res)=>{
    res.json(req.user)
})
router.get("/:id",(req,res)=>{
  User.findById(req.params.id).then(user=>{
    res.json(user)
  })
})

module.exports=router