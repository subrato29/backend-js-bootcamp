'use strict'

const http = require('http')

const PORT = 8000
const HOST = '127.0.0.1'

const server = http.createServer((req, res) => {
  console.log(req)
  res.end('Hello from the server!')
})

server.listen(PORT, HOST, () => {
  console.log(`Listening to request on port ${PORT}`)
})
