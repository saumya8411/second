const express = require('express')
const mysql = require('mysql')
const morgan = require('morgan')
const cors = require('cors');
// require('./db/mongoose')



// const userRouter = require('./routers/user')
const userRouter = require('./routers/deepakUser')
const sessionRouter = require('./routers/session')
const libraryRouter = require('./library/routes/index')

const app = express()


app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
});


app.use(morgan('dev'));

//Body Parser
app.use(express.urlencoded({extended : false}));
app.use(express.json());

app.use(userRouter)
app.use(sessionRouter)
app.use('/library' , libraryRouter)

module.exports = app