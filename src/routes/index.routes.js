const express=require('express')
const routes=express.Router()
routes.use('/',require('./navigation.routes'))
routes.use('/user',require('./user.routes'))
module.exports=routes


