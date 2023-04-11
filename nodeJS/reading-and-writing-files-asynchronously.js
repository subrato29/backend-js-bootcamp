const fs = require('fs') // 'fs' stands for file system

fs.readFile('./txt/input.txt', 'utf-8', (err, data) => {
  if (err) console.log('ERROR!')
  fs.writeFile(
    './txt/output.txt',
    `The output is:\n${data}`,
    'utf-8',
    (err) => {
      console.log('Your file has been written')
    }
  )
})
console.log('Will read file!')
