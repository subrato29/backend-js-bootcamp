/**
 * node.js single threaded
 */
const fs = require('fs')

//Blocking synchronous way
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log(textIn)
const textOut = `${textIn} and ${Date.now()}`
console.log(textOut)
fs.writeFileSync('./txt/output.txt', textOut)

//Non-blocking Asynchronous way, callback
fs.readFile('./txt/input.txt', 'utf-8', (err, data) => {
  if (err) return console.log('ERROR!')
  console.log(data)
})
console.log('Will read file!')
