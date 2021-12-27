// Dotenv
require('dotenv').config();
// Connect DB
const {connectDB} = require('./configs/db');
connectDB();
// import Routes 
const authRoute = require('./routes/authRoute');
const postRoute = require('./routes/postRoute');
// Import Error Handler
const {errorHandler} = require('./middleware/errorHandler');

const express = require('express');
const cors = require('cors');

const app = express();

// Cors
app.use(cors());
// Body Parser
app.use(express.json());

// Mount the route 
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/posts', postRoute);

// UnHandled Route
app.all('*',(req,res,next)=>{
    const err = new Error('The Route cant not be Found');
    err.statusCode = 404;
    next(err);
})
app.use(errorHandler);
const port = process.env.APP_PORT;
app.listen(port,()=>{
    console.log('Server is running');
})