const Sequelize = require('sequelize')
module.exports=(sequelize)=>{
const Video=sequelize.define("video",{
   title:{
       type:Sequelize.STRING
   }
})
return Video
}