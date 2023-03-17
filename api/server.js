const express = require('express');
const server = express();
const authRouter = require('./auth/auth-router');
const tweetsRouter = require('./tweets/tweets-router');
const usersRouter = require('./users/users-router');
const md = require('./auth/auth-middleware');
server.use('/api/auth',md.restricted,authRouter);
server.use('/api/users',md.restricted,usersRouter);
server.use('/api/tweets',md.restricted,tweetsRouter);
server.use('*',(req,res)=>{
    res.status(404).json({message:'not found'})
})

module.exports=server;