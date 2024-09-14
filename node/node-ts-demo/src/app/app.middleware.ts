export const defaultErrorHandler = (error,request, response ,next) =>{
    const message = error.message
    response.status(500).send({
        message,
    })
}