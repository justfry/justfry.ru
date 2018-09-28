const express = require('express')

const app = express()

const port = 9000;

app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.sendFile('index.html')
})

app.listen(port, () => {
    console.log('app has started on port:', port)
})