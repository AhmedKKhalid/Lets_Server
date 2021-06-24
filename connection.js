const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://invailedkk:01201697726a@letsclusters.ijeff.mongodb.net/Lets?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(db=>console.log('Connection Done !'))