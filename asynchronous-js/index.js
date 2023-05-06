const { Console } = require('console')
const fs = require('fs')
const superagent = require('superagent')

const BASEURL = 'https://gorest.co.in'

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find the file')
      resolve(data)
    })
  })
}

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('Could not write file')
      resolve('Success!')
    })
  })
}

readFilePro(`${__dirname}/input.txt`)
  .then((data) => {
    console.log(`The output is ${data}`)
    return superagent.get(`${BASEURL}/public/v2/users/${data}`)
  })
  .then((res) => {
    console.log(res.body)
    return writeFilePro('response.txt', res.body.email)
  })
  .then(() => {
    console.log('The response saved into the file!')
  })
  .catch((err) => {
    console.log(err.message)
  })
