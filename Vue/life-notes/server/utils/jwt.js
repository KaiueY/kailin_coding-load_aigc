const jwt = require('jsonwebtoken')

function sign(option){// 加盐/私钥
    return jwt.sign(option,'ssh',{
        expiresIn:86400

    }) 
}
function verify (){//校验token
    return  async(ctx,next) =>{
        const jwtToken = ctx.req.headers.authorization
        // console.log(jwtToken);
        if(jwtToken){
             try {
                const decoded=jwt.verify(jwtToken,'ssh')
                // console.log(decoded);
                if(decoded.username){ //合法
                    ctx.userid = decoded.id
                    ctx.nickname=decoded.nickname
                   await next()
                }
             } catch (error) {
                ctx.status = 401
                ctx.body={
                    msg:'token已失效l',

                }
             }
        }
    }
}

module.exports = {
    sign,
    verify
}