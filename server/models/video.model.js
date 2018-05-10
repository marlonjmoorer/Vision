
module.exports=(sequelize, DataTypes)=>{
const Video=sequelize.define("Video",{
   title:{
       type:DataTypes.STRING
   }
})
return Video
}