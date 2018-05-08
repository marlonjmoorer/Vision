const Sequelize = require('sequelize')
module.exports=(sequelize)=>{
const User=sequelize.define("user",{
    email:{
        type:Sequelize.STRING,
        allowNull:false,
    },loginType:{
        type:Sequelize.STRING,
        allowNull:false
    }
})
return User
}