const fs=require('fs');
const { error } = require('console');

// read file
fs.readFile('test.txt',"utf-8",(error,data)=>{
    if(error){
        console.error(error);
        return;
    }
    console.log(data)

});


// create file or update content
fs.writeFile("test.txt","My name is Mohamed",(err)=>{

      if(err){
        console.error(err);
        return;
    }
    console.log("file created or updated")

});

// add content
fs.appendFile("test.txt"," , I love Programming",(err)=>{
       if(err){
        console.error(`error :${err}`);
        return;
    }
    
    console.log("data added in last file")

})

