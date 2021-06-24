const {Router} =require('express')
const router = Router()
const kUsers = require('../models/User')


router.get('/users',async(req,res)=>{
const users=await kUsers.find();
return res.status(200).json({users})
})

module.exports=router;
