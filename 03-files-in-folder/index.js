const { Dirent } = require('fs')
const fs = require('fs')
const path = require('node:path')

let myPath = path.join(__dirname, 'secret-folder')


let whoKnows = fs.promises.readdir(`${myPath}`,{withFileTypes: true})

// In this huge section i created several arrays i made two promises , first one was more like hey do you have any files there?? really? then tell me their names and extensions, and then another promise but about their size:)
whoKnows.then(data =>{
    let fileNamesArray = []
    let fileExtensionsArray =[]
    let fileWeightArray = []
    data.map(fileName =>{
      if(fileName.isFile()){
        fileNamesArray.push(fileName.name.replace(`${path.extname(fileName.name)}`,''))
        fileExtensionsArray.push(path.extname(fileName.name).replace('.',''))

          fs.promises.stat(path.join(__dirname, 'secret-folder', `${fileName.name}`))
          .then(statData =>{
            fileWeightArray.push(statData.size)
            if(fileWeightArray.length === fileNamesArray.length){
            for (let index = 0; index < fileNamesArray.length; index++) {
              console.log(`${fileNamesArray[index]} - ${fileExtensionsArray[index]} - ${fileWeightArray[index]}`)
            }}
          })
          
          .catch(err =>{
            console.log(err)
          })
        }
      return(fileNamesArray,fileExtensionsArray,fileWeightArray)
    })   
  }
)
whoKnows.catch(err => {
  console.log(err)
})
