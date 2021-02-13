const express = require('express');
const server  = express();

//imports
const authRouter = require('./auth/authRouter');
const usersRouter = require('./users/usersRouter');

//export
module.exports = server;

//middlewares/routers
server.use(express.json())
server.use('/api/auth/', authRouter)
server.use('/api/users/', usersRouter)

//routes
server.get('/', (req, res)=>{
    res.status(200).json({message: `Hi, welcome in.`});
});