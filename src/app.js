const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname,'./public')))
app.set('view engine')
nunjucks.configure([path.resolve(__dirname, './views')], {
    autoescape: false,
    express: app
})
app.use('/', require('./routes/index.routes'))

module.exports = app


