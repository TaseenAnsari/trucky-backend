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
const cors  = require('cors');
const features = require('./router/feature.route')


//middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.use(express.static(path.join(__dirname, 'public/trucky')));

//Routes
app.use('/api/customers',customers,errorHandler)
app.use('/api/vehicles',vehicles)
app.use('/api/auth',auth)
app.use('/api/feature',features)



app.get('/api/:name',async(req , res , next)=>{
     return res.sendFile(__dirname+'/uploads/'+req.params.name)
})

app.use('/*',(req , res)=>{
     res.sendFile(path.join(__dirname+'/public/trucky/index.html'))
})


//handle all routes error
app.use(errorHandler)


module.exports = app;
