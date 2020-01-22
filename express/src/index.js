const express = require('express') 
const app = express() 
const rateLimit = require('express-rate-limit')
const PORT = 8050

const limiter = rateLimit({
    windowsMs: 1000 * 60 * 1, 
    max: 10, 
    message: 'Too many requests, please wait a minute'
})

app.use('/', limiter)

app.get('/', (req, res) =>{
    res.json({
        'page': "'/'"
    })
})

app.get('/products', (req, res) =>{
    res.json({
        'page': 'products'
    })
})

app.get('/services', (req, res) =>{
    res.json({
        'page': 'services'
    })
})

app.listen(PORT, () =>{
    console.log(`Server running at port: ${PORT}`)
})