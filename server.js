const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({ 
        status:200,
        message: "Jay Shree Krishna!"
    })
})

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})