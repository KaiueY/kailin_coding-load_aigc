export const validateUserData = (req,res,next) =>{
    console.log('validate');
    next()
    
}
export const hashPassword = (req,res,next) =>{
    res.send('haha')
}