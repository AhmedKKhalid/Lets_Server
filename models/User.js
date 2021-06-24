const {Schema , model}=require('mongoose')

const userSchema=new Schema({
    
    "userName":String,
    "email":String,
    "password":String,
    "likes":Number,
    "photoUrl":String,
    "uid":String,
    "isDisabled":Boolean,
    "bio":String,
    "nOfGroups":Number,
    "location":String,
},
{writeConcern:{
    w:'majority',
    j:true,
    wtimeout:1000
}})

module.exports=model('User',userSchema)