const express = require('express')
const {parseToken} = require('../utils');
const router= express.Router()
const {User} =require('../models');


const  auth=(req,res,next)=>{
    const {authorization}=req.headers
    if(authorization&&authorization.includes("JWT")){
        const token =authorization.split(" ")[1]
        const data= parseToken(token)
        return User.findById(data.sub).then(user=>{
            req.user=user
            return next()
        })
    }
    return res.status(401).send("No authorized") 
}
router.use("/users",auth,require("./users"))
module.exports=router