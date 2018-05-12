const express = require('express')
const {parseToken} = require('../utils');
const router= express.Router()
const {User} =require('../models');


const  auth=(req,res,next)=>{
    if(req.user){
        next()
    }
    else{
        next("/")  
    }
}
router.use((req,res,next)=>{
    const {authorization}=req.headers
    if(authorization&& authorization.includes("JWT")){
        var token =authorization.split(" ")[1]
        var data= parseToken(token)
        User.findOne({id:data.sub,profileId:data.profileId}).then(user=>{
            req.user=user
            next()
        })
    }
})
router.use("/users",auth,require("./users"))

module.exports=router