const Sequelize = require('sequelize')
module.exports=(sequelize)=>{
const User=sequelize.define("user",{
    profileId:{
        type:Sequelize.STRING,
        allowNull:false,
    },loginType:{
        type:Sequelize.STRING,
        allowNull:false
    }
})
User.createOrLogin = (token,secret,profileId,loginType)=>{
    return User.findOrCreate({ where: {profileId,loginType} }).spread((user, created) =>{
        console.log(created)
        return user
    })
};
  
User.sync({force:true}).then(val=>{
    console.log("synced")
}).catch(console.log)
return User
}