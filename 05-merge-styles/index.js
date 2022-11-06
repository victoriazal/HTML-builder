
const fs = require('fs')
const path = require('node:path')
const readline = require('readline');

let myPath = path.join(__dirname, 'styles')
let pathForBundleFIle = path.join(__dirname ,'project-dist', 'bundle.css')
let newFile = fs.createWriteStream(`${pathForBundleFIle}`);


let readingFiles = fs.promises.readdir(`${myPath}`,{withFileTypes: true})

readingFiles.catch(err => {
  console.log(err)
})
readingFiles.then(files =>{
    files.forEach(value =>{
      if(path.extname(value.name)==='.css'){
        let readingPath = path.join(`${myPath}`, `${value.name}`);
        const myInterface = readline.createInterface({
          input: fs.createReadStream(`${readingPath}`)
        });
        myInterface.on('line', (fileLine) => {
          newFile.write(`${fileLine}\n`)
        });
    }
  })
})
