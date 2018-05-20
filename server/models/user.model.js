
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
            type:DataTypes.BLOB('long')
        },
        username:{
            type:DataTypes.STRING
        },
        displayName:{
            type:DataTypes.STRING
        },

    })
    User.createOrLogin = ({token,secret,profileId,loginType,displayName,username})=>{
        return User.findOrCreate({ where: {profileId,loginType},defaults: {token,secret,displayName,username} }).spread((user, created) =>{
            console.log(created)
            return user
        })
    };
    User.checkHandleExists=(username)=>{
        return User.count({
            where: { username}
        }).then(count=>count>0)
    }
    return User
}