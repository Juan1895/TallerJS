const fs = require('fs')

fs.readFile('in_1.in',{encoding:'utf8'},(err,data)=>{
    if(!err){
        console.log(data)
    }else{
        console.error(err)
    }
})