const fs = require('fs');
const path = require('path');

const filesPath = path.join(__dirname,'Files');

// Writing Files
for(let i=1; i<=3; i++){
  fs.writeFileSync(`${filesPath}/File${i}.txt`,`This is file number ${i}`);
}

// Reading Directory
fs.readdir(filesPath, (err,files)=>{
  if(err){
    console.log('Error...');
    return;
  }
  console.log(files);
});

fs.readdir(filesPath, (err,files)=>{
  if(err){
    console.log('Error...');
    return;
  }
  else{
    files.forEach((fileName)=>{
      console.log(fileName);
    });
  }
});


// Reading file contents
fs.readdir(filesPath, (err,files)=>{
  if(err){
    console.log('Error reading directory...');
    return;
  }
  else{
    files.forEach((fileName)=>{
      fs.readFile((filesPath+"/"+fileName),'utf8',(err,data)=>{
        if(err){
          console.log('Error reading file...');
          return;
        }
        else console.log(data);
      });
    });
  }
});