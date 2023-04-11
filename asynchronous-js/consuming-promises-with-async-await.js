const fs = require('fs')
const superagent = require('superagent')

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not fine in the file!')
      resolve(data)
    })
  })
}

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('Could not write the file!')
      resolve('success')
    })
  })
}

/**
 * `await` keyword stop the code until promise is resolved.
 *  One `await` represent one `promise` and `then()` process.
 * `async-await` make code synchronized where as the code remains asynchronous behind the scene.
 */
const getResponse = async () => {
  try {
    const data = await readFilePro(`${__dirname}/input.txt`)
    console.log(`The input is: ${data}`)

    const res = await superagent.get(
      `https://gorest.co.in/public/v2/users/${data}`
    )
    console.log(res.body.name)

    await writeFilePro('response.txt', res.body.name)
    console.log('Response message saved')
  } catch (err) {
    console.log(`err message: ${err.message}`)
  }
}

getResponse()
