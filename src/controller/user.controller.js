const database=require('../database/db')
class UserController{
    static Usuarios=(req,res)=>{
        let body=req.body
        body.id=database[database.length-1].id+1
        database.push(body)
        res.render('Crud.html',{data:database})
    }
}
module.exports=UserController
