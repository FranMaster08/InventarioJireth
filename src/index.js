require('dotenv').config()
const app =require('./app')
app.listen(process.env.PORT,()=>{
    console.log(`Server is running in PORT: ${process.env.PORT}`);
})