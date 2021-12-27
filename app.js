const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('./models/db.model')()
const customers = require('./router/customers.route')
const vehicles = require('./router/vehicles.route')
const auth = require('./router/auth.route')
const app = express();
const errorHandler = require('./middlewares/errorHandler');
const cors  = require('cors')
//middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/api/customers',customers,errorHandler)
app.use('/api/vehicles',vehicles)
app.use('/api/auth',auth)


app.get('/api/:name',async(req , res , next)=>{
     return res.sendFile(__dirname+'/uploads/'+req.params.name)
})

//handle all routes error
app.use(errorHandler)


module.exports = app;
