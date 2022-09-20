const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,'Files');
const filePath = `${dirPath}/Current-File.txt`;

// Write in file
fs.writeFileSync(filePath,'This is our Current File');


// Read File
fs.readFile(filePath,'utf8',(err,fileContent)=>{
  if(err){
    console.log('Error reading file...');
    return;
  }
  else console.log(fileContent);
});


// Append or Update file content
fs.appendFile(filePath,' and it is updated.',(err)=>{
  if(err){
    console.log('Error updating file...');
    return;
  }
  else console.log("File is updated...");
});


// Rename the file
fs.rename(filePath, `${dirPath}/New-File.txt`,(err)=>{
  if(err){
    console.log('Error renaming file...');
    return;
  }
  else console.log("File is renamed...");
});

// Delete file
fs.unlinkSync(`${dirPath}/New-File.txt`);