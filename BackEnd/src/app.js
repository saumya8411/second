const express = require('express')
// require('./db/mongoose')

const userRouter = require('./routers/user')
const sessionRouter = require('./routers/session')
const libraryRouter = require('./library/routes/index')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(sessionRouter)
app.use('/library' , libraryRouter)

module.exports = app