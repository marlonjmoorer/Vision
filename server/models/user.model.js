
module.exports=(sequelize, DataTypes)=>{
    const User=sequelize.define("User",{
        profileId:{
            type:DataTypes.STRING,
            allowNull:false,
        },loginType:{
            type:DataTypes.STRING,
            allowNull:false
        },
        token:{
            type:DataTypes.STRING,
        },
        secret:{
            type:DataTypes.STRING,
        },
        about:{
            type:DataTypes.TEXT
        },
        photo:{
            type:DataTypes.BLOB
        }
    })
    User.createOrLogin = (token,secret,profileId,loginType)=>{
        return User.findOrCreate({ where: {profileId,loginType},defaults: {token,secret} }).spread((user, created) =>{
            console.log(created)
            return user
        })
    };
    return User
}