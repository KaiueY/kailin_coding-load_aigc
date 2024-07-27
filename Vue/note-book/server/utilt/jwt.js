const jwt = require('jsonwebtoken')

function sign(option){// 加盐/私钥
    return jwt.sign(option,'ssh',{
        expiresIn:86400

    }) 

}

module.exports = {
    sign,
}