const express=require('express')
const routes=express.Router()
routes.post('/add',require('../controller/user.controller').Usuarios)
module.exports=routes


