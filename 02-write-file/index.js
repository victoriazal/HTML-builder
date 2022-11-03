const fs = require('fs')
const readline = require('readline')
const path = require('node:path');

let newFile = fs.createWriteStream('./02-write-file/new-text.txt');

process.stdout.write('Hello beautiful person, let write something..? type exit if you wanna go do other things:)\n');

let createNewFile = (userInput) => {
  if (userInput.toString().trim() === 'exit') {
    process.stdout.write('K,bye honey\n');
    process.exit();
  } 
  else {
    newFile.write(`${userInput.toString()}`)
    process.stdout.write('Great, what else?\n');
  }
}
process.stdin.on('data', createNewFile)







