const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send({'message': 'Hello World v2'})
})

var port = process.env.PORT || '8080';
app.listen(port)