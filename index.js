
const express = require('express')
const app = express()

app.get('/npmjs.org', function (req, res) {
  res.send('ok')
})

app.listen(3000)