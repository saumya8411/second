const app = require('./app')
const morgan = require('morgan');
const port = process.env.PORT 

app.use(morgan('dev'));


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})