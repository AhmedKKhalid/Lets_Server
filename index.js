const app=require('./app')
require('./connection');



async function main(){
    app.listen(3000,function(){
        console.log('Server are working now')

    })
    
}

main();
