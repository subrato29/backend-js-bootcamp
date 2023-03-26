const fs = require('fs') // 'fs' stands for file system

const txtIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(txtIn);

const txtOut = `The output is: ${txtIn}. \nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', txtOut);
console.log('File written!');