const express=require('express')
const routes=express.Router()
routes.get('/',require('../controller/nav.controller').home)
module.exports=routes


