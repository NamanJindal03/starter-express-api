const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.get('/apitest', (req,res) => {
    res.status(200).json({
        'name': 'naman'
    })
})
app.listen(process.env.PORT || 3000)