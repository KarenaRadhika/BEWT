const fs=require('fs');
fs.copyFile('lab_6/opening.png','Lab_6/newPicture.png',(err)=>{
    if(err){
        console.error("ERROR",err);
        
    }else{
        console.log("copied successfully...");
        
    }
})