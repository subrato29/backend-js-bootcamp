const fs = require('fs');

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log(textIn);

const textOut = `${textIn} and ${Date.now()}`;
console.log(textOut);

fs.writeFileSync('./txt/output.txt', textOut);