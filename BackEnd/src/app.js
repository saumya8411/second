const express = require('express')
// require('./db/mongoose')
const userRouter = require('./routers/user')
const sessionRouter = require('./routers/session')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(sessionRouter)

module.exports = app