const express = require('express')
const mysql = require('mysql')
const morgan = require('morgan')
// require('./db/mongoose')



// const userRouter = require('./routers/user')
const userRouter = require('./routers/deepakUser')
const sessionRouter = require('./routers/session')
const libraryRouter = require('./library/routes/index')

const app = express()

app.use(morgan('dev'));

//Body Parser
app.use(express.urlencoded({extended : false}));
app.use(express.json());

app.use(userRouter)
app.use(sessionRouter)
app.use('/library' , libraryRouter)

module.exports = app