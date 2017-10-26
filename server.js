
const express = require('express')
const app = express()

// Just a comment
app.use(express.static('public'))

app.listen(process.env.PORT, function () {
  console.log('my app is running!')
})
