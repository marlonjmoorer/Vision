const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')
const sequelize = new Sequelize(process.env.CONNECTIONSTRING)
const dir ="./server/models"
const models= {}

fs.readdirSync(dir)
.filter(filename=> (/.model./).test(filename))
.forEach(filename=>{
    const model=require(`./${filename}`)(sequelize)
    const name= filename.split(".model")[0]
    model.sync()
    models[name]=model
})
module.exports=models