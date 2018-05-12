const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')
const sequelize = new Sequelize(process.env.CONNECTIONSTRING,{logging:false})

fs.readdirSync(__dirname)
.filter(filename=> filename!=path.basename( __filename))
.forEach(filename=>{
    sequelize.import(`./${filename}`)
})
//sequelize.sync({alter:true})
module.exports=sequelize.models