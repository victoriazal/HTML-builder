const readline = require('readline');
const fs = require('fs');
const path = require('node:path');
let myPath = path.join(__dirname, 'text.txt')

const myInterface = readline.createInterface({
  input: fs.createReadStream(myPath)
});
 
myInterface.on('line', (fileLine) => {
  console.log(`${fileLine}`);
});