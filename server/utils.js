const jwt = require('jsonwebtoken');
const secret=process.env.SECRET
const generateToken=({loginType,id,profileId})=>{

    const token = jwt.sign({profileId}, secret, {
        expiresIn: '3 days',
        issuer: loginType,
        subject: id.toString()
      });
    
    return token;
}

const parseToken=(token)=>{
    var decoded = jwt.verify(token,secret);
    return decoded
}

module.exports={
    parseToken,
    generateToken
}