const fs = require('fs')
const path = require('node:path')
const readline = require('readline');

let newFolderPath = path.join(__dirname,'project-dist')

const createNewFolder = fs.promises.mkdir(newFolderPath,{recursive:true})

