const fs = require('fs');
const superagent = require('superagent');

fs.readFile(`${__dirname}/input.txt`, (err, data) => {
    console.log(`The input is: ${data}`);
    superagent
        .get(`https://gorest.co.in/public/v2/users/${data}`)
        .end((err, res) => {
            if(err) return console.log(`err message: ${err.message}`);
            console.log(res.body.name);
            fs.writeFile('response.txt', res.body.name, err => {
                console.log('response message saved')
            });
        })
})