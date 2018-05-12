const express = require('express')
const {User} =require('../models');

const router= express.Router()


router.get("/self",(req,res)=>{
    res.json(req.user)
})
router.get("/",(req,res)=>{
  res.json(req.user)
})

module.exports=router