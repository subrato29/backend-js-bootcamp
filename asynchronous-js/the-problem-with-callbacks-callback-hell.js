const fs = require('fs')
const superagent = require('superagent')

const BASEURL = 'https://gorest.co.in'

fs.readFile(`${__dirname}/input.txt`, (err, data) => {
  console.log(`The output is ${data}`)

  superagent.get(`${BASEURL}/public/v2/users/${data}`).end((err, res) => {
    if (err) return console.log(err)
    console.log(res.body)

    fs.writeFile('response.txt', res.body.email, (err) => {
      if (err) return console.log(err)
      console.log(`The extracted email from the response body is saved`)
    })
  })
})
