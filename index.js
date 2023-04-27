const express = require('express')
const catagories = require('./data/catagories.json')
var cors = require('cors')
const app = express()

app.use(cors())

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/catagories", (req, res) => {
    res.send(catagories);
})

app.listen(port, () => {
    console.log(`Dragon app listening on port ${port}`)
})