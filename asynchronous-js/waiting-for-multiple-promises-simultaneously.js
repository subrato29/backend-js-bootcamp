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

    const res1 = superagent.get(`https://gorest.co.in/public/v2/users/${data}`)
    const res2 = superagent.get(`https://gorest.co.in/public/v2/users/${data}`)
    const res3 = superagent.get(`https://gorest.co.in/public/v2/users/${data}`)

    const all = await Promise.all([res1, res2, res3])
    const names = all.map((el) => el.body.name)
    console.log(names)

    await writeFilePro('response.txt', names.join('\n'))
    console.log('Response message saved')
  } catch (err) {
    console.log(`err message: ${err.message}`)
    throw err
  }
  return '2'
}

;(async () => {
  try {
    console.log('1')
    const x = await getResponse()
    console.log(x)
    console.log('3')
  } catch (err) {
    console.log('ERROR!')
  }
})()
