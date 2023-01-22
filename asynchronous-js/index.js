const fs = require('fs');
const superagent = require('superagent');

const readFilePro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject('I could not fine in the file!');
            resolve(data);
        })
    })
}

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if (err) reject('Could not write the file!');
            resolve('success');
        })
    })
}

readFilePro(`${__dirname}/input.txt`)
    .then(data => {
        console.log(`The input is: ${data}`);
        return superagent.get(`https://gorest.co.in/public/v2/users/${data}`);
    }).then(res => {
        console.log(res.body.name);
        return writeFilePro('response.txt', res.body.name);
    }).then(() => {
        console.log('response message saved');
    }).catch(err => {
        console.log(`err message: ${err.message}`);
    });