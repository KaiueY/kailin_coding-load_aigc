const userRouter = require('./user.js')
const noteRouter = require('./note.js')

function useRouter (app){
    app.use(userRouter.routes(), userRouter.allowedMethods())
    app.use(noteRouter.routes(), noteRouter.allowedMethods())
}
module.exports = useRouter