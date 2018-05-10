
module.exports=(sequelize, DataTypes)=>{
    const User=sequelize.define("User",{
        profileId:{
            type:DataTypes.STRING,
            allowNull:false,
        },loginType:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })
    User.createOrLogin = (token,secret,profileId,loginType)=>{
        return User.findOrCreate({ where: {profileId,loginType} }).spread((user, created) =>{
            console.log(created)
            return user
        })
    };
    return User
}