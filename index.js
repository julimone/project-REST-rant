require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})


app.get('*', (req, res) => {
    res.statuss(404).send('<h1> 404 Page </h1>')
})

app.listen(process.env.PORT)