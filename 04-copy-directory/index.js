const { Console } = require('console')
const fs = require('fs')
const path = require('path')

const newFolderPath = path.join(__dirname, "files-copy")
const oldFolderPath = path.join(__dirname,"files")


const createNewFolder = fs.promises.mkdir(newFolderPath,{recursive:true})

createNewFolder.catch(err =>{
  console.log(err)
})
createNewFolder.then( newFolder =>{
  return(newFolder)
})

let readOurFolder = fs.promises.readdir(`${oldFolderPath}`,{withFileTypes: true})
readOurFolder.catch(err =>{
  console.log(err)
})

readOurFolder.then(oldFolder =>{
  oldFolder.forEach(element => {
    const pathToTakeOldFiles = path.join(__dirname,"files",`${element.name}`)
    const pathToPutNewOnes = path.join(__dirname,"files-copy",`${element.name}`)
    fs.copyFile(`${pathToTakeOldFiles}`, `${pathToPutNewOnes}`, err => {
      if(err) throw err; 
    });
  });
  
})

