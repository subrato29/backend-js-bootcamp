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

const getResponse = async () => {
  try {
    const data = await readFilePro(`${__dirname}/input.txt`)
    console.log(`The input is: ${data}`)

    const res = await superagent(`https://gorest.co.in/public/v2/users/${data}`)
    console.log(res.body.email)

    await writeFilePro('response.txt', res.body.email)
    console.log('Response message saved')
  } catch (err) {
    console.log(err)
    throw err
  }
  return 'HEY DONE!'
}

/**
 * console.log('1')
  getResponse()
    .then((x) => {
      console.log(x)
      console.log('2')
    })
    .catch((err) => {
      console.log('ERROR')
      throw err
    })
 */

;(async () => {
  try {
    console.log('1')
    const x = await getResponse()
    console.log(x)
    console.log('2')
  } catch (error) {
    console.log('ERROR')
  }
})()
