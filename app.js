const express =require('express')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false,limit:'50mb'}))


app.use(require('./controller/auth'))

app.use(require('./controller/currentUserOps'))
app.use(require('./controller/UsersOps'))



module.exports=app;
